// frontend/src/components/Staff/ScoreInputForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { submitBatchResults, generateFinalSheets } from '../api/auth.js';

const ScoreInputForm = ({ criteria, sessionData, selectedSubjects, onBack }) => {
  const { students } = sessionData;
  const { academicYear, term, className } = criteria;

  // Initialize state to hold scores: { [studentId]: { [subjectId]: { testScore: 0, examScore: 0 } } }
  const initialScores = students.reduce((acc, student) => {
    acc[student._id] = selectedSubjects.reduce((subAcc, sub) => {
      subAcc[sub.id] = { testScore: '', examScore: '' };
      return subAcc;
    }, {});
    return acc;
  }, {});


useEffect(() => {
    // This runs once when the component mounts and 'students' prop is available.
    if (students && students.length > 0) {
        const initialStudentsData = students.map(student => ({
            ...student,
            // Ensure teacherComment property exists, even if empty string
            teacherComment: student.teacherComment || '', 
        }));
        setStudentsData(initialStudentsData);
    }
}, [students]);

  const [scores, setScores] = useState(initialScores);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [studentsData, setStudentsData] = useState([]);
  const [availableSubjects, setAvailableSubjects] = useState([]);

  const handleScoreChange = (studentId, subjectId, field, value) => {
  
    const score = Math.max(0, Math.min(100, parseInt(value) || ''));
    
    setScores(prevScores => ({
      ...prevScores,
      [studentId]: {
        ...prevScores[studentId],
        [subjectId]: {
          ...prevScores[studentId][subjectId],
          [field]: score,
        },
      },
    }));
  };






  const handleInputChange = (studentId, field, value) => {
        setStudentsData(prevData =>
            prevData.map(student => {
                if (student._id === studentId) {
                    if (field === 'teacherComment') {
                        // Handle the new top-level field: teacherComment
                        return { ...student, teacherComment: value };
                    } else {
                        // Handle subject scores
                        // ... (Existing subject score update logic)
                        // Example: student.subjectScores.map(sub => ...)
                    }
                }
                return student;
            })
        );
    };





  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    // Format data for the backend API
    const batchResults = students.map(student => {
      // Convert the frontend subject IDs to names for the backend model
      const subjectScores = selectedSubjects.map(subject => ({
        subjectName: subject.name,
        testScore: scores[student._id][subject.id].testScore || 0,
        examScore: scores[student._id][subject.id].examScore || 0,
      }));

      return {
        studentId: student._id,
        subjectScores: subjectScores,
      };
    });

    const payload = { className, academicYear, term, batchResults };

    try {
      const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
      
      const { data } = await submitBatchResults(payload);

      setSuccessMessage(data.message + " You can now review/finalize the results.");
      
      // Step 6: Trigger Result Sheet Generation/Review (Not implemented yet)
      // We'll simulate the jump to the next step
      alert("Results submitted! Click OK to simulate generating/reviewing the final sheets.");

    } catch (err) {
      setErrorMessage(err.response?.data?.message || 'Failed to submit batch results.');
    } finally {
      setLoading(false);
    }
  };





  // Calculate total score for display (Test Max 40, Exam Max 60)
  const calculateTotal = (studentId, subjectId) => {
    const test = parseInt(scores[studentId][subjectId].testScore) || 0;
    const exam = parseInt(scores[studentId][subjectId].examScore) || 0;
    return test + exam;
  };



  const handleFinalize = async () => {
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const token = localStorage.getItem('token');

    const batchResults = students.map(student => {
      const studentCommentData = studentsData.find(d => d._id === student._id) || {};
      
      const subjectScores = selectedSubjects.map(subject => ({
        subjectName: subject.name,
        testScore: scores[student._id][subject.id].testScore || 0,
        examScore: scores[student._id][subject.id].examScore || 0,
      }));

      return {
        studentId: student._id,
        subjectScores: subjectScores, 
        teacherComment: studentCommentData.teacherComment || '',
      }
    });

    try {
      const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
      
      const { data } = await generateFinalSheets({ className, academicYear, term });

      // const response = await axios.post('/api/staff/results/batch', {
      //       className,
      //       academicYear,
      //       term,
      //       batchResults,
      //   }, {
      //       headers: { Authorization: `Bearer ${token}` },
      //   });

      setSuccessMessage(data.message + " The results are now visible to students.");
      
      if (data.pdfPath) {
      // Provide download link for the generated batch file
      const downloadUrl = `http://localhost:5000/api/staff/results/download?filePath=${encodeURIComponent(data.pdfPath)}`;
      window.open(downloadUrl, '_blank');
      
      } else {
        setSuccessMessage(data.message || 'Results finalized successfully.');
        console.warn("PDF path was not returned by the server.");
      }

    } catch (err) {
      setErrorMessage(err.response?.data?.message || 'Failed to finalize and generate sheets.');
    } finally {
      setLoading(false);
    }
  };






  return (
    <div className="score-input-card">
      <h3>Result Entry: {className} | {term} | {academicYear}</h3>
      <p>**Subjects Selected:** {selectedSubjects.map(s => s.name).join(', ')}</p>
      
      <button onClick={onBack} className="btn-secondary back-btn">← Change Subjects</button>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                {selectedSubjects.map(subject => (
                  <th key={subject.id} colSpan="3" className="subject-header">
                    {subject.name}
                  </th>
                ))}
                <th>Teacher's comment</th>
              </tr>
              <tr>
                <th></th>
                {selectedSubjects.map(subject => (
                  <React.Fragment key={subject.id}>
                    <th>Test (30)</th>
                    <th>Exam (70)</th>
                    <th>Total (100)</th>
                  </React.Fragment>
                ))}
              </tr>
            </thead>
            <tbody>
              {studentsData.map(student => (
                <tr key={student._id}>
                  <td>{student.firstName} {student.lastName}</td>
                  {selectedSubjects.map(subject => (
                    <React.Fragment key={subject.id}>
                      <td>
                        <input
                          type="number"
                          min="0"
                          max="30"
                          value={scores[student._id][subject.id].testScore}
                          onChange={(e) => handleScoreChange(student._id, subject.id, 'testScore', e.target.value)}
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          min="0"
                          max="70"
                          value={scores[student._id][subject.id].examScore}
                          onChange={(e) => handleScoreChange(student._id, subject.id, 'examScore', e.target.value)}
                          required
                        />
                      </td>
                      <td className="total-cell">
                        {calculateTotal(student._id, subject.id)}
                      </td>
                    </React.Fragment>
                  ))}

                  <td colSpan={availableSubjects.length * 2 + 1}>
                      <textarea
                          id={`comment-${student._id}`}
                          rows="2"
                          value={student.teacherComment || ''}
                          onChange={(e) => 
                              handleInputChange(student._id, 'teacherComment', e.target.value)
                          }
                          style={{ width: '100%', resize: 'none' }}
                          placeholder="Enter comment here (Max 255 chars)"
                          maxLength={255}
                      />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button type="submit" className="btn-primary submit-btn" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit All Scores'}
        </button>
      </form>

      {successMessage && !loading && (
            <div className="finalization-section">
                <p>Scores submitted. Review and finalize to make them available to students.</p>
                <button onClick={handleFinalize} className="btn-primary finalize-btn" disabled={loading}>
                    {loading ? 'Generating...' : 'Generate & Finalize Result Sheets (Step 6)'}
                </button>
            </div>
        )}
    </div>
  );
};

export default ScoreInputForm;