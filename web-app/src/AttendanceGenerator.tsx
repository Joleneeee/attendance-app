import axios from "axios";
import React, { useEffect, useState } from "react";

const AttendanceCode = () => {
  const [attendanceCode, setAttendanceCode] = useState(0);
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [studentList, setStudentList] = useState([]);

  const today = new Date();
  const currentTime = today.getHours() + ':' + today.getMinutes();
  const currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  useEffect(() => {
    setTime(currentTime);
    setDate(currentDate);
    getStudentList();
  },[])

  const getStudentList = async () => {
    const response = await axios.get(`http://localhost:3000/checkin/${attendanceCode}`);
    const data = response.data[0];
    setStudentList(data.students);
  }

  const generateAttendanceCode = async () => {
    // Generate a random 5-digit code
    const code = Math.floor(10000 + Math.random() * 90000);
    setAttendanceCode(code);
  };

  const startAttendance = async () => {
    const response = await axios.post(`http://localhost:3000/checkin`, {
      checkinCode: attendanceCode,
      subjectCode: "PRG9999",
      time: time,
      date: date,
      students: [["Alex", "1903456"], ["Ben", "1903566"]]
    });

    alert('Attendance Checking Started');
  }

  // const handleCheckIn = (student: any) => {
  //   setStudents((prevStudents) => [...prevStudents, student]);
  // };

  return (
    <div>
        <h3>Date: {date}</h3>
        <h3>Time: {time}</h3>
      <h3>Attendance Code: {attendanceCode || '-'}</h3>
      <button onClick={generateAttendanceCode}>Generate Attendance Code</button>
      <button onClick={startAttendance}>Start</button>
      <h4>Students</h4>
      <ul>
          {studentList.map((student, index) => (
            <li key={index}> {student[0]} {student[1]}</li>
          ))}
        </ul>
    </div>
  );
};

export default AttendanceCode;
