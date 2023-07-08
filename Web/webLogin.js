import React, { useState } from 'react';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [attendanceCode, setAttendanceCode] = useState('');

  const handleLogin = () => {
    // Perform validation and authentication here
    if (email === 'lecturer@example.com' && password === 'password') {
      // Successful login
      // Generate random 5-digit attendance code
      const code = Math.floor(10000 + Math.random() * 90000);
      setAttendanceCode(code.toString());
    } else {
      // Invalid credentials
      setAttendanceCode('');
      alert('Invalid email or password.');
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {attendanceCode && <p>Attendance Code: {attendanceCode}</p>}
    </div>
  );
};

export default LoginScreen;