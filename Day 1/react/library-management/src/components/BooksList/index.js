import React, { useState } from 'react'
import PAGINATIONCONFIG from '../../config/PAGINATIONCONFIG'
import ReactPaginate from 'react-paginate'

const BooksList = ({books}) => {

  const[curPage, setCurPage] = useState (0);

  const handlePageClick = (selectedPage) => {
    setCurPage(selectedPage.selected)
  }

  const itemsPerPage = PAGINATIONCONFIG.ITEMSPERPAGE;
  const start = curPage * itemsPerPage;
  const curBooks = books.slice(start, start + itemsPerPage);
  const pageCount = Math.ceil (books.length/itemsPerPage);

  const [show, setShow] = useState(false);

  const handleClickShow = () => {
    setShow(show ? false : true);
  }

  return (
    
    <div>
      <button type="button" class="btn btn-primary" onClick={() => handleClickShow()} > {show ? "Hide" : "Show"} </button>
      <table className="table-style"> 
        <tr>
          <th> Book ID</th>
          <th> Book Name </th>
          <th> Author </th>
        </tr>
        {show === false 
          ? <tr><td colSpan={3} className="text-center"> <strong> Table is hidden </strong> </td></tr>
          : curBooks?.map(book => (
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

export default BooksList
