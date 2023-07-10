import React, { useState } from 'react';
import './App.css'
import axios from 'axios';
import AttendanceCode from './AttendanceGenerator';

const subjects = [
  { id: 1, name: 'PRG2014' },
  { id: 2, name: 'SEG2102' },
  { id: 3, name: 'PRG3014' }
];


// const SubjectList = ({ subjects }) => {
//   const [selectedSubject, setSelectedSubject] = useState(null);

//   const handleSubjectClick = (subject) => {
//     setSelectedSubject(subject);
//   };

//   return (
//     <div>
//       <h2>Subjects</h2>
//       <ul>
//         {subjects.map((subject) => (
//           <li key={subject.id} onClick={() => handleSubjectClick(subject)}>
//             {subject.name}
//           </li>
//         ))}
//       </ul>
//       {selectedSubject && <AttendanceCode />}
//     </div>
//   );
// };

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

  const lecturerLogin = async () => {
    const response = await axios.get(`http://localhost:3000/lecturer/${email}/${password}`);
    const data = response.data[0];
    console.log("data: " + data);
    return data;
  }

  const handleSubmit = async () => {

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    const data = lecturerLogin();

    if (await data) {
      setIsLoggedIn(true);
    }

    // try {
    //   const user = await login(email, password);
    //   const subjects = await getSubjects(user.id);

    //   // Set the user and subjects in the state or pass them to the parent component
    //   setIsLoggedIn(true);
    //   console.log('Logged in successfully:', user, subjects);
    // } catch (error) {
    //   setIsLoggedIn(false);
    //   setEmailError('Login failed. Please try again.');
    //   console.error('Login failed:', error);
    // }
  };
  if (isLoggedIn) {
    return <AttendanceCode/>;
  }

  return (
    <div>
    <img
      src="/sunwaylogo.jpg"
      className="image"
      alt="Sunway University logo"
    />
    <div className="container">
      <form>
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
        
        <div className="App">
      {/* <h1>Lecturer Login</h1> */}
      {/* {isLoggedIn ? (
        <SubjectList subjects={subjects} />
      ) : (
        <LoginForm handleSubmit={handleSubmit} />
      )} */}
    </div>
      </form>
      <button onClick={handleSubmit}>Login</button>
    </div>
    </div>
  );
};


// const App = () => {
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setLoggedIn(true);
//   };

//   return (
//     <div className="App">
//       <h1>Lecturer Login</h1>
//       {isLoggedIn ? (
//         <SubjectList subjects={subjects} />
//       ) : (
//         <LoginForm handleSubmit={handleSubmit} />
//       )}
//     </div>
//   );
// };

export default Login;


