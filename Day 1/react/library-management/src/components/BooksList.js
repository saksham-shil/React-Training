import React, { useState } from 'react'
import './tables.css'
import booksConfig from '../config/booksConfig'
import ReactPaginate from 'react-paginate'

const BooksList = ({books}) => {

  const[curPage, setCurPage] = useState (0);

  const handlePageClick = (selectedPage) => {
    setCurPage(selectedPage.selected)
  }

  const itemsPerPage = booksConfig.booksPerPage;
  const start = curPage * itemsPerPage;
  const curBooks = books.slice(start, start + itemsPerPage);
  const pageCount = Math.ceil (books.length/itemsPerPage);


  return (
    <div>
      <table className="table-style"> 
        <tr>
          <th> Book ID</th>
          <th> Book Name </th>
          <th> Author </th>
        </tr>
        {curBooks.map(book => (
          <tr key = {book.id}>
            <td> {book.id} </td>
            <td> {book.title} </td>
            <td> {book.author} </td>
          </tr>
        ))}
      </table>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={booksConfig.marginPagesDisplayed}
        pageRangeDisplayed={booksConfig.pageRangeDisplayed}
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

export default BooksList
