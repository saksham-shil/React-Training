import logo from './logo.svg';
import './App.css';
import BooksList from './components/BooksList';
import StudentDetails from './components/StudentDetails';
import StudentsList from './components/StudentsList';
import { useState } from 'react'


function App() {
  const students = [
    { "id":1, "title": "VIPUL", "age": 21 },
    { "id":2, "title": "SHISPAL", "age": 20 },
    { "id":3, "title": "RACHIT", "age": 20 },
    { "id":4, "title": "SUHEL", "age": 20 },
    { "id":5, "title": "SACHIN", "age": 20 }
  ];

  const [ student, setStudent] = useState(null);

  const StudentClick = (student) => {
    setStudent(student);
  }

  return (
    <div className="container">
      <h1 className="mt-4">Library Management</h1>
      <div className="row mt-4">
        <div className="col-md-4">
          <BooksList />
        </div>
        <div className="col-md-4">
          <StudentsList students = {students} onClickStudent={StudentClick}/>
        </div>
        <div className="col-md-4">
          <StudentDetails student = {student} />
        </div>
      </div>
    </div>
  );
}

export default App;
