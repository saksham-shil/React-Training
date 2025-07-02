
import React from 'react';
import './StudentDetails.css';

const StudentDetails = ({student}) => {
  if (!student) {
    return <div className="student-details"><h3>Click a student row</h3></div>;
  }

  return (
    <div className="student-details">
      <h2>Student Details</h2>
      <p><strong>Student ID:</strong> {student.id}</p>
      <p><strong>Student Name:</strong> {student.title}</p>
      <p><strong>Age:</strong> {student.age}</p>
    </div>
  );
};

export default StudentDetails;
