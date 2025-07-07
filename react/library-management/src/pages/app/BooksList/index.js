import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import PAGINATIONCONFIG from '../../../constants/paginationConfig';
// import initialBooks from '../../../data/bookslist.json'
import BookForm from '../../../components/BookForm';
import { useSelector } from 'react-redux';



const BooksList = () => {
  const[curPage, setCurPage] = useState (0);
  const [show, setShow] = useState(true);
  // const [books, setBooks] = useState (initialBooks);
  const books = useSelector(state => state.books)

  const handlePageClick = (selectedPage) => {
    setCurPage(selectedPage.selected)
  }

  // const handleBookAdd = (newBook) => {
  //   setBooks([newBook, ...books])
  // }

  const itemsPerPage = PAGINATIONCONFIG.itemsPerPage;
  const start = curPage * itemsPerPage;
  const curBooks = books.slice(start, start + itemsPerPage);
  const pageCount = Math.ceil (books.length/itemsPerPage);


  const handleClickShow = () => {
    setShow(show ? false : true);
  }

  return (
    
    <div className = "container">
      
      <BookForm/>
      <h1> Books List </h1>

      <button type="button" className="btn btn-primary" onClick={() => handleClickShow()} > {show ? "Hide List" : "Show List"} </button>
      <table className="table-style"> 
        <thead>
        <tr>
            <th> Book ID</th>
            <th> Book Name </th>
            <th> Author </th>
          </tr>
        </thead>
        <tbody>
        {show === false && <tr><td colSpan={3} className="text-center"> <strong> Table is hidden </strong> </td></tr>}

        {show && curBooks.length === 0 && <tr><td colSpan={3} className="text-center"><strong> No data is found </strong> </td></tr>}

        {show && 
        curBooks?.map(book => (
            <tr key = {book.id}>
              <td> {book.id} </td>
              <td> {book.title} </td>
              <td> {book.author} </td>
            </tr>
          ))}
        {/* {show === false 
          ? <tr><td colSpan={3} className="text-center"> <strong> Table is hidden </strong> </td></tr>
          : curBooks?.map(book => (
            <tr key = {book.id}>
              <td> {book.id} </td>
              <td> {book.title} </td>
              <td> {book.author} </td>
            </tr>
          ))}  */}
        </tbody>  
      </table>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={PAGINATIONCONFIG.marginPagesDisplayed}
        pageRangeDisplayed={PAGINATIONCONFIG.pageRangeDisplayed}
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
