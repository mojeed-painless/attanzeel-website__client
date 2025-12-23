// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import '../assets/styles/rolebase.css';
import '../assets/styles/dashboard.css';
import Login from '../pages/StudentLogin';
import StudentDashboard from '../pages/StudentDashboard';
import StaffWorkflow from '../pages/StaffWorkflow';
import navLogo from '../assets/images/atlogo.png';
import pcaLogo from '../assets/images/pcalogo2.png';

const RoleBaseDashboard = () => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Check local storage for existing session
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.token) {
      setUserRole(userInfo.role);
    }
  }, []);

  const handleLoginSuccess = (role) => {
    setUserRole(role);
  };

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setUserRole(null);
  };

  const renderContent = () => {
    switch (userRole) {
      case 'student':
        return <StudentDashboard onLogout={handleLogout} />;
      case 'staff':
        return <StaffWorkflow onLogout={handleLogout} />;
      default:
        return <Login onLoginSuccess={handleLoginSuccess} />;
    }
  };

  return (
    ((userRole === 'student' || userRole === 'staff') ? 
      
      <div className="App">
        <nav className='nav__container'>
          <div className="nav__logo">
            <img src={navLogo} alt="School logo"/>
          </div>

            {userRole && <button onClick={handleLogout} className="btn-logout">Logout</button>}
          </nav>

        <main className='rolebase__container'>
          {renderContent()}
        </main>
        
        <footer>
          <div className="sub__footer">
              <p>&copy; {new Date().getFullYear()} At-Tanzeel Islamic Center</p>
              <img src={pcaLogo} alt="pca logo" />
          </div>
        </footer>
      </div> : 
    
    <>
      {renderContent()}
    </>
        
      )
  );
};

export default RoleBaseDashboard;