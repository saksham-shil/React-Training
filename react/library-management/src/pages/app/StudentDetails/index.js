
import React from 'react';
import students from '../../../data/studentsList.json'
import { useParams } from 'react-router-dom';

const StudentDetails = () => {
  const {studentid} = useParams()

  const student = students.find ((student) => (student.id === Number(studentid)))

  if (!student) {
    return <div className="student-details"><h3>Student with this ID doesn't exist</h3></div>;
  }

  return (
    <div className="student-details">
      <h1> Student Details </h1>
      <p><strong>Student ID:</strong> {student.id}</p>
      <p><strong>Student Name:</strong> {student.title}</p>
      <p><strong>Age:</strong> {student.age}</p>
    </div>
  );
};

export default StudentDetails;
