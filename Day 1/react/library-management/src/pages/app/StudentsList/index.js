import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import PAGINATIONCONFIG  from '../../../constants/paginationConfig';
import students from '../../../constants/studentsList.json'
import { Link, Outlet } from 'react-router-dom';

const StudentsList = () => {

  const [curPage, setCurPage] = useState(0);
  const [show, setShow] = useState(true);


  const handlePageClick = (selectedPage) => {
    setCurPage(selectedPage.selected);
  }

  const itemsPerPage = PAGINATIONCONFIG.ITEMSPERPAGE
  const start = curPage * itemsPerPage;
  const curStudents = students.slice (start, start + itemsPerPage);
  const pageCount = Math.ceil (students.length/itemsPerPage);


  const handleClickShow = () => {
    setShow(show ? false : true);
  }

  return (
    
    <div>
      <h1> Students List </h1>
      <button type="button" class="btn btn-primary" onClick={() => handleClickShow()} > {show ? "Hide" : "Show"} </button>
      <table className="table-style"> 
      <tr>
        <th>Student ID</th>
        <th>Student Name</th>
        <th>Student Age</th>
        <th>Action</th>
      </tr>
      {show === false && <tr><td colSpan={3} className="text-center"> <strong> Table is hidden </strong> </td></tr>}

      {show && curStudents.length === 0 && <tr><td colSpan={3} className="text-center"><strong> No data is found </strong> </td></tr>}

      {show && 
        curStudents?.map(student => (
            <tr key = {student.id}>
              <td> {student.id} </td>
              <td> {student.title} </td>
              <td> {student.age} </td>
              <td> <Link to={`/students-list/${student.id}`} className="btn btn-primary"> Details </Link> </td>
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
      <Outlet />

    </div>
  )
}

export default StudentsList
