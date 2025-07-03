import './App.css';
import BooksList from './components/BooksList/index';
import StudentDetails from './components/StudentsDetails/index';
import StudentsList from './components/StudentsList/index';
import { useState } from 'react'
import students from './constants/studentsList.json'
import books from './constants/bookslist.json'


function App() {

  const [ student, setStudent] = useState(null);

  const StudentClick = (student) => {
    setStudent(student);
  }

  return (
    <div className="container">
      <h1 className="mt-4">Library Management</h1>
      <div className="row mt-4">
        <div className="col-md-4">
          <BooksList books =  {books}/>
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
