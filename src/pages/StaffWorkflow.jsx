// frontend/src/components/Staff/StaffWorkflow.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchStudentsAndSubjects } from '../api/auth.js';
import ScoreInputForm from '../components/ScoreInputForm';
import StudentRegistrationForm from '../components/StudentRegistrationForm';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const StaffWorkflow = ({ onLogout }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('entry');

  const handleTabChange = (tab) => {
      setActiveTab(tab);
      setStep(1); // Reset result entry workflow
      setError('');
    //   setSuccessMessage('');
  }
  
  // Input Criteria State
  const [criteria, setCriteria] = useState({
    academicYear: '2025/2026',
    term: 'First Term',
    className: 'SS 1',
    selectedSubjectIds: [],
  });

  // Data to pass to the input form
  const [sessionData, setSessionData] = useState(null); 

  const years = ['2025/2026', '2024/2025'];
  const terms = ['First Term', 'Second Term', 'Third Term'];
  const classes = ['PLAYGROUP', 'KINDERGARTEN 1', 'KINDERGARTEN 2', 'NURSERY 1', 'NURSERY 2', 'PRIMARY 1', 'PRIMARY 2', 'PRIMARY 3', 'PRIMARY 4', 'PRIMARY 5', 'JSS 1', 'JSS 2', 'JSS 3', 'SS1A', 'SS 2', 'SS 3']; // Hardcoded for now

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  // Step 1: Select Class & Term, Step 3: Select Subjects
  const handleNextStep = async () => {
    if (!criteria.academicYear || !criteria.term || !criteria.className) {
      return setError('Please select Year, Term, and Class.');
    }
    
    // Step 1/2: Fetch Students and Available Subjects
    if (step === 1) {
      setLoading(true);
      setError('');
      try {
        const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
        
        // Use the backend route defined earlier
        const { data } = await fetchStudentsAndSubjects(criteria.className);
        
        // Store students and all subjects
        setSessionData({
          students: data.students,
          availableSubjects: data.availableSubjects,
        });
        
        // Automatically select all subjects by default for demo
        const initialSubjects = data.availableSubjects.map(sub => sub.id);
        setCriteria(prev => ({ ...prev, selectedSubjectIds: initialSubjects }));

        setStep(2); // Move to Subject Selection/Confirmation
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load students or subjects.');
      } finally {
        setLoading(false);
      }
    } 
    // Step 2: Subject Confirmation
    else if (step === 2) {
        if (criteria.selectedSubjectIds.length === 0) {
            return setError('You must select at least one subject.');
        }
        setStep(3); // Move to Score Input Form
    }
  };

  const renderSubjectSelection = () => (
    <div className="selection-card">

      <h3>Select Subjects for Input</h3>

      <div className="subject-list">
        {sessionData.availableSubjects.map(subject => (
          <label key={subject.id} className="subject-checkbox">
            <input
              type="checkbox"
              checked={criteria.selectedSubjectIds.includes(subject.id)}
              onChange={(e) => {
                const checked = e.target.checked;
                setCriteria(prev => {
                  const newIds = checked
                    ? [...prev.selectedSubjectIds, subject.id]
                    : prev.selectedSubjectIds.filter(id => id !== subject.id);
                  return { ...prev, selectedSubjectIds: newIds };
                });
              }}
            />
            {subject.name}
          </label>
        ))}
      </div>

      <div className="selection-actions">
        <button onClick={() => setStep(1)}><span><FaArrowLeftLong /></span> Back</button>
        <button onClick={handleNextStep}>Proceed to Score Input <span><FaArrowRightLong /></span></button>
      </div>
      
    </div>
  );





  return (
    <div className="staff-workflow-container">
        <h2>Staff Dashboard</h2>

        {error && <p className="error-message">{error}</p>}

        <div className="tab-navigation">
            <button 
                className={`tab-btn ${activeTab === 'entry' ? 'active' : ''}`}
                onClick={() => handleTabChange('entry')}
            >
                Result Entry & Finalization
            </button>
            <button 
                className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
                onClick={() => handleTabChange('register')}
            >
                Student Registration
            </button>
        </div>

        {/* Conditional Rendering based on Tab */}
        {activeTab === 'register' && (
            <StudentRegistrationForm />
        )}

        {activeTab === 'entry' && (
        <div className="result-entry-content">
        {/* Step 1: Initial Selection */}
        {step === 1 && (
            <div className="selection-card">

            <h3>Select Criteria</h3>

            <div className="form-group-inline">
                <select value={criteria.academicYear} onChange={(e) => setCriteria({...criteria, academicYear: e.target.value})}>
                <option value="">Year</option>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
                </select>

                <select value={criteria.term} onChange={(e) => setCriteria({...criteria, term: e.target.value})}>
                <option value="">Term</option>
                {terms.map(t => <option key={t} value={t}>{t}</option>)}
                </select>

                <select value={criteria.className} onChange={(e) => setCriteria({...criteria, className: e.target.value})}>
                <option value="">Class</option>
                {classes.map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <button onClick={handleNextStep} className="btn-primary" disabled={loading}>
                    {loading ? 'Loading...' : 'Load Students & Subjects'}
                </button>
            </div>
            
            </div>
        )}

        {/* Step 2: Subject Selection */}
        {step === 2 && sessionData && renderSubjectSelection()}

        {/* Step 3: Score Input (Step 4 & 5 Logic) */}
        {step === 3 && sessionData && (
            <ScoreInputForm
            criteria={criteria}
            sessionData={sessionData}
            selectedSubjects={sessionData.availableSubjects.filter(sub => 
                criteria.selectedSubjectIds.includes(sub.id)
            )}
            onBack={() => setStep(2)}
            />
        )}
        </div>)}
    </div>
  );
};

export default StaffWorkflow;