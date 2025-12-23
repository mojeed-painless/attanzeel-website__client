// frontend/src/components/StudentDashboard.js
import React, { useState } from 'react';
import axios from 'axios';
import ResultTable from '../components/ResultTable.jsx';
import { fetchStudentResults, downloadStudentResultsPdf } from '../api/auth.js';

const StudentDashboard = ({ onLogout }) => {
  const [year, setYear] = useState('');
  const [term, setTerm] = useState('');
  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [checkResult, setCheckResult] = useState(false);

  const years = ['2025/2026', '2024/2025'];
  const terms = ['First Term', 'Second Term', 'Third Term'];
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const fetchResults = async () => {
    if (!year || !term) {
      return setError('Please select both Academic Year and Term.');
    }
    
    setLoading(true);
    setResultData(null);
    setError('');

    try {
      const config = {
        headers: { Authorization: `Bearer ${userInfo.token}` },
        params: { academicYear: year, term }
      };

    const { data } = await fetchStudentResults(year, term);
      setResultData(data);
      console.log('Fetched result data:', data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch results.');
    } finally {
      setLoading(false);
    }
    
  };



  const handleDownloadPdf = async () => {
        if (!year || !term) {
            setError('Please select an Academic Year and Term.');
            return;
        }
        setLoading(true);
        setError('');

        try {
            // 1. Ask the backend for the specific PDF file path for this student/term.
            // (The backend will look up the student's ID and criteria, then return the saved file path)
            const { data } = await downloadStudentResultsPdf(year, term);

            if (data.pdfPath) {

              const userInfo = JSON.parse(localStorage.getItem('userInfo'));
              const token = userInfo ? userInfo.token : null;

              if (!token) {
                  setError('Authentication error: Token not found.');
                  return;
              }
                // 2. Construct the full download URL using the returned path
                const downloadBaseUrl = 'http://localhost:5000/api/staff/results/download';
                const encodedFilePath = encodeURIComponent(data.pdfPath);
                const downloadUrl = `${downloadBaseUrl}?filePath=${encodedFilePath}`;

                // 3. Use an authenticated fetch call to get the file data (Blob)
                const response = await fetch(downloadUrl, {
                    method: 'GET',
                    headers: {
                        // Include the token in the Authorization header
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    // Handle server errors (e.g., 404 file not found, 401 unauthorized)
                    const errorText = await response.text();
                    throw new Error(`Download failed: ${response.status} - ${errorText.substring(0, 100)}...`);
                }
                
                // 4. Convert the response stream into a downloadable Blob
                const blob = await response.blob();

                // 5. Create a temporary URL and link element to trigger download
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                
                // Set a clean filename for the user
                a.download = `Results_${userInfo.firstName}_${year}_${term}.pdf`; 
                document.body.appendChild(a);
                a.click(); // Programmatically click the hidden link
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url); // Clean up the temporary URL
            } else {
                setError('PDF file path not available. Result may not be finalized.');
            }

        } catch (err) {
          // Check if it's an Axios error (from step 1, downloadStudentResultsPdf)
          if (err.response) {
              setError(err.response.data?.message || 'Error fetching PDF path from API.');
          } else {
              // Assume it's a native Error (from step 3, fetch) or a generic JS error
              setError(err.message || 'An unknown error occurred during download.');
          }
        } finally {
            setLoading(false);
        }
    };






  return (
    <div className="dashboard-card">
      <h3>Student Dashboard</h3>
      <h2>Welcome back, {userInfo.firstName}!</h2>

      <button className="check-result-button" onClick={() => setCheckResult(cr => !cr)}>
        Click here to check result
      </button>

      {checkResult && <div className="form-group-inline">
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select Year</option>
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>

        <select value={term} onChange={(e) => setTerm(e.target.value)}>
          <option value="">Select Term</option>
          {terms.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        
        <button onClick={fetchResults} disabled={loading}>
          {loading ? 'Loading...' : 'View Results'}
        </button>
      </div>}

      {error && <p className="error-message">{error}</p>}
      
      {resultData && <ResultTable resultData={resultData} handleDownloadPdf={handleDownloadPdf}/>}
    </div>
  );
};

export default StudentDashboard;