import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import PAGINATIONCONFIG from '../../config/PAGINATIONCONFIG'

const StudentsList = ( { students, onClickStudent }) => {
  const [curPage, setCurPage] = useState(0);

  const handlePageClick = (selectedPage) => {
    setCurPage(selectedPage.selected);
  }

  const itemsPerPage = PAGINATIONCONFIG.ITEMSPERPAGE
  const start = curPage * itemsPerPage;
  const curStudents = students.slice (start, start + itemsPerPage);
  const pageCount = Math.ceil (students.length/itemsPerPage);

const [show, setShow] = useState(false);

  const handleClickShow = () => {
    setShow(show ? false : true);
  }

  return (
    
    <div>
      <button type="button" class="btn btn-primary" onClick={() => handleClickShow()} > {show ? "Hide" : "Show"} </button>
      <table className="table-style"> 
      <tr>
        <th>Student ID</th>
        <th>Student Name</th>
        <th>Student Age</th>
      </tr>
      {show === false 
      ? <tr><td colSpan={3} className="text-center"> <strong> Table is hidden </strong> </td></tr>
      : curStudents?.map(student => (
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
        marginPagesDisplayed={PAGINATIONCONFIG.MARGINPAGESDISPLAYED}
        pageRangeDisplayed={PAGINATIONCONFIG.PAGERANGESDISPLAYED}
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
