import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';
import '../styles/LoginPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  // Handle sign-up button click
  const handleSignUp = () => {
    navigate('/SelectPage');  // Navigate to the SelectPage
  };

  const handleSignIn = () => {
    navigate('/LoginPage');  // Navigate to LoginPage
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="logo-section">
          <img src="/logo.png" alt="Logo" className="logo" />
          <h1 className="title">ILLUMART</h1>
        </div>
        <div className="auth-buttons">
          <button className="btn signup" onClick={handleSignUp}>Sign Up</button>
          <button className="btn signin" onClick={handleSignIn}>Sign In</button>
        </div>
      </div>

      {/* Main content */}
      <div className="hero">
        <div className="overlay"></div>
        <div className="content">
          <p className="description">
            Jelajahi karya digital eksklusif dan dukung kreator favoritmu dengan belanja yang mudah dan aman!
          </p>
          <button className="start-button">MULAI SEKARANG</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
