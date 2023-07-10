import React, { useState } from 'react';
import './App.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    // Perform authentication logic here
    // For simplicity, let's assume the login is successful
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <div>You are logged in!</div>;
  }

  return (
    <div className="image">
    <img src="/sunwaylogo.jpg" className="image" alt="Sunway University logo" />
    <div className="container">
      <h2 >Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label>Email: </label>
          <input type="email" value={email} onChange={handleEmailChange} />
          {emailError && <div className="error">{emailError}</div>}
        </div>
        <div className="container">
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className= "loginButton"></div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
