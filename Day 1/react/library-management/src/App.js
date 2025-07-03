import './App.css';
import AppRoutes from './routes';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header /> 
      <div className="container mt-4">
        <AppRoutes /> 
      </div>
    </div>
  );
}

// function App() {

//   const [ student, setStudent] = useState(null);

//   const StudentClick = (student) => {
//     setStudent(student);
//   }

//   return (
//     <div className="container">
//       <h1 className="mt-4">Library Management</h1>
//       <div className="row mt-4">
//         <div className="col-md-4">
//           <BooksList books =  {books}/>
//         </div>
//         <div className="col-md-4">
//           <StudentsList students = {students} onClickStudent={StudentClick}/>
//         </div>
//         <div className="col-md-4">
//           <StudentDetails student = {student} />
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
