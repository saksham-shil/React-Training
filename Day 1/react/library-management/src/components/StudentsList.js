import React from 'react'
import './tables.css'

const StudentsList = ( { students, onClickStudent }) => {
  return (
    <div>
      <table className="table-style"> 
      <tr>
        <th>Student ID</th>
        <th>Student Name</th>
        <th>Student Age</th>
      </tr>
      {students.map(student => (
        <tr key = {student.id} onClick={() => onClickStudent(student)}>
          <td>{student.id}</td>
          <td>{student.title}</td>
          <td>{student.age}</td>
        </tr>
      ))}
    </table>
    </div>
  )
}

export default StudentsList
