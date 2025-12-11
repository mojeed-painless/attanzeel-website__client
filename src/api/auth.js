import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 3. Request Interceptor for Authentication
// This automatically injects the JWT token into the header of every request
api.interceptors.request.use(
  (config) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    
    // Check if user info and token exist
    if (userInfo && userInfo.token) {
      // Set the Authorization header in the format: Bearer <token>
      config.headers.Authorization = `Bearer ${userInfo.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// --- API Functions for Authentication ---

export const loginUser = (username, password) => {
  return api.post('/auth/login', { username, password });
};


// --- API Functions for Staff Workflow ---

/**
 * Fetches students and available subjects for a specific class.
 * @param {string} className - The name of the class (e.g., 'SS1A').
 */
export const fetchStudentsAndSubjects = (className) => {
  return api.get(`/staff/students/${className}`);
};






/**
 * Submits a batch of subject scores for a class/term.
 * @param {object} payload - Batch data including class, term, and scores.
 */
export const submitBatchResults = (payload) => {
  return api.post('/staff/results/batch', payload);
};




/**
 * Triggers the final generation and finalization of result sheets.
 * @param {object} criteria - { className, academicYear, term }
 */
export const generateFinalSheets = (criteria) => {
  return api.post('/staff/results/generate-sheets', criteria);
};





/**
 * Registers a single student and creates their login account.
 * @param {object} studentData - Student's unique ID, names, class, and password.
 */
export const registerSingleStudent = (studentData) => {
  return api.post('/staff/register-single-student', studentData);
};


// --- API Functions for Student Workflow ---

/**
 * Fetches a student's final results sheet.
 * @param {string} academicYear 
 * @param {string} term 
 */
export const fetchStudentResults = (academicYear, term) => {
  // Use params object to construct the query string (?year=...&term=...)
  return api.get('/student/results', {
    params: { academicYear, term }
  });
};





/**
 * Generates the download link for a student's final results PDF.
 * @param {string} academicYear 
 * @param {string} term 
 */
export const downloadStudentResultsPdf = (academicYear, term) => {
  // We expect the backend to return the path to the student's specific result PDF.
  // We'll create a new backend endpoint for this (Step 3).
  return api.get('/student/results/pdf-path', {
    params: { academicYear, term }
  });
};





export default api;