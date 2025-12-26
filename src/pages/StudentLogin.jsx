import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../api/auth.js';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import '../assets/styles/login.css';
import loginLogo from '../assets/images/atlogo.png';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const { data } = await loginUser(username, password);
      
      console.log("Login Success Data:", data);
      // Store token and user info
      localStorage.setItem('userInfo', JSON.stringify(data));
      onLoginSuccess(data.role); // Notify parent component of success
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Check server connection.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card" id="login-form">

        <h3 className='login-title'>Login to your account</h3>

          {error && <p className="error-message">{error}</p>}

        <form className="login-form" onSubmit={submitHandler}>
        <div className="login-form-group">
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit" className="auth-submit-btn">Login</button>
        
        </form>
      </div>



      <div className="right-info">
        <div className="cover"></div>

        <div className="info-logo">
          <img src={loginLogo} alt="academy logo" />
        </div>

        <div className="info-text">
          <h2>Welcome to At-Tanzeel Students Personalized Portal</h2>
          <p>
            Enter student's admission number <small>[e.g ASI00209]</small> as Username and Surname (in lowercase) as Password
            <span className='showMore'> below</span> to access the portal. 
            <a href="#login-form" className='login-form showMore'>
              <span>Login here</span>
              <FaArrowRightLong />
            </a>
          </p>
        </div>

        {/* <div className="illustration-image">
          <img src={codeIllustration} alt="code illustration" />
        </div> */}

          <div className="home-link">
            <Link to='/'>  
              <FaArrowLeftLong /> 
              <small>Go back to home page</small>
            </Link>
          </div>
      </div>


    </div>
  );
};

export default Login;