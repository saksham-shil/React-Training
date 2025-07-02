import React from 'react'
import './tables.css'

const BooksList = () => {
  const books = [
    { "id":1, "title": "The Lord of the Rings", "author": "J.R.R. Tolkien" },
    { "id":2, "title": "To Kill a Mockingbird", "author": "Harper Lee" },
    { "id":3, "title": "1984", "author": "George Orwell" },
    { "id":4, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald" },
    { "id":5, "title": "Pride and Prejudice", "author": "Jane Austen" }
  ];

  return (
    <div>
      <table className="table-style"> 
        <tr>
          <th> Book ID</th>
          <th> Book Name </th>
          <th> Author </th>
        </tr>
        {books.map(book => (
          <tr key = {book.id}>
            <td> {book.id} </td>
            <td> {book.title} </td>
            <td> {book.author} </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default BooksList
