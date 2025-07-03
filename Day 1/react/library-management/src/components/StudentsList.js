import React, { useState } from 'react'
import './tables.css'
import ReactPaginate from 'react-paginate'
import studentsConfig from '../config/studentsConfig'

const StudentsList = ( { students, onClickStudent }) => {
  const [curPage, setCurPage] = useState(0);

  const handlePageClick = (selectedPage) => {
    setCurPage(selectedPage.selected);
  }

  const itemsPerPage = studentsConfig.studentsPerPage
  const start = curPage * itemsPerPage;
  const curStudents = students.slice (start, start + itemsPerPage);
  const pageCount = Math.ceil (students.length/itemsPerPage);



  return (
    <div>
      <table className="table-style"> 
      <tr>
        <th>Student ID</th>
        <th>Student Name</th>
        <th>Student Age</th>
      </tr>
      {curStudents.map(student => (
        <tr key = {student.id} onClick={() => onClickStudent(student)}>
          <td>{student.id}</td>
          <td>{student.title}</td>
          <td>{student.age}</td>
        </tr>
      ))}
      </table>

    <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={studentsConfig.marginPagesDisplayed}
        pageRangeDisplayed={studentsConfig.pageRangeDisplayed}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  )
}

export default StudentsList
