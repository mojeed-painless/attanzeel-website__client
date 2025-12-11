// frontend/src/components/Staff/StudentRegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { registerSingleStudent } from '../api/auth.js';
import '../assets/styles/rolebase.css';

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    uniqueStudentId: '',
    firstName: '',
    lastName: '',
    currentClass: 'SS1A', // Default to a class
    currentAcademicYear: '2024/2025', // Default to a year
    defaultPassword: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const years = ['2024/2025', '2023/2024'];
  const classes = ['JSS1A', 'JSS2A', 'SS1A', 'SS2B'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    try {
      const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
      
      const { data } = await registerSingleStudent(formData);

      setMessage(data.message);
      
      // Reset form on successful submission
      setFormData({
        uniqueStudentId: '',
        firstName: '',
        lastName: '',
        currentClass: 'SS1A',
        currentAcademicYear: '2024/2025',
        defaultPassword: '',
      });

    } catch (err) {
      setError(err.response?.data?.message || 'Failed to register student.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-card">
      <h3>Manual Student Registration 📝</h3>
      <p>Staff use this form to create new student records and linked login accounts.</p>

      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group-triple">
            <div className="form-group">
                <label>Student ID (Username)</label>
                <input type="text" name="uniqueStudentId" value={formData.uniqueStudentId} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
        </div>
        
        <div className="form-group-triple">
            <div className="form-group">
                <label>Academic Year</label>
                <select name="currentAcademicYear" value={formData.currentAcademicYear} onChange={handleChange} required>
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
            </div>
            <div className="form-group">
                <label>Current Class</label>
                <select name="currentClass" value={formData.currentClass} onChange={handleChange} required>
                    {classes.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
            </div>
            <div className="form-group">
                <label>Default Password</label>
                <input type="password" name="defaultPassword" value={formData.defaultPassword} onChange={handleChange} required />
            </div>
        </div>

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'Registering...' : 'Register Student'}
        </button>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;