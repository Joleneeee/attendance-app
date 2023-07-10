import React, { useState } from 'react';

const LectureClasses = () => {
  const [classes, setClasses] = useState([
    { id: 1, subjectCode: 'MATH101', subjectName: 'Mathematics' },
    { id: 2, subjectCode: 'ENG201', subjectName: 'English Literature' },
    { id: 3, subjectCode: 'SCI301', subjectName: 'Physics' },
  ]);

  const [selectedClass, setSelectedClass] = useState(null);
  const [attendanceCode, setAttendanceCode] = useState('');
  const [students, setStudents] = useState([]);

  const generateCode = () => {
    if (selectedClass) {
      const code = Math.floor(10000 + Math.random() * 90000); // Generate a random 5-digit code
      setAttendanceCode(code.toString());
    }
  };

  const checkInStudent = (studentId) => {
    const updatedStudents = students.map((student) => {
      if (student.id === studentId) {
        return { ...student, checkedIn: true };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  const renderClassesList = () => {
    return (
      <ul>
        {classes.map((lectureClass) => (
          <li
            key={lectureClass.id}
            onClick={() => setSelectedClass(lectureClass)}
            style={{ cursor: 'pointer' }}
          >
            {lectureClass.subjectCode} - {lectureClass.subjectName}
          </li>
        ))}
      </ul>
    );
  };

  const renderStudentsTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Checked In</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.checkedIn ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h3>Select a Class:</h3>
      {renderClassesList()}

      {selectedClass && (
        <div>
          <h4>Selected Class: {selectedClass.subjectCode}</h4>
          <button onClick={generateCode}>Generate Attendance Code</button>
          <p>Attendance Code: {attendanceCode}</p>
          <p>Check in students:</p>
          <ul>
            <li>
              <button onClick={() => checkInStudent(1)}>Check In Student 1</button>
            </li>
            <li>
              <button onClick={() => checkInStudent(2)}>Check In Student 2</button>
            </li>
            <li>
              <button onClick={() => checkInStudent(3)}>Check In Student 3</button>
            </li>
          </ul>
          {renderStudentsTable()}
        </div>
      )}
    </div>
  );
};

export default LectureClasses;
