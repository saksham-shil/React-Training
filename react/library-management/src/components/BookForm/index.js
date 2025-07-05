import React from 'react'
import {useState} from 'react'

const BookForm = ({onBookAdd}) => {
  const [newBook, setNewBook] = useState({'id' : '', 'title' : '', 'author' : ''});
  const [isTouched, setTouched] = useState ({})
  const isFormValid = newBook.id && newBook.title && newBook.author;

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setNewBook ((prev) => ({...prev, [name] : value}));
  }

  const handleBlur = (event) => {
    const {name, value} = event.target;
    setTouched({ ...isTouched, [name]: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      onBookAdd(newBook);
      setNewBook({'id' : '', 'title' : '', 'author' : ''})
      setTouched({});      
    }
    else setTouched({ id: true, title: true, author: true });
  }

  return (
    <div className = 'container'>
      <h2> Add new Book </h2>
      <form onSubmit={handleSubmit}>
        <div>
            <div className = 'mt-4'>
           <label htmlFor='id'><b>Book ID:</b>  </label>
           <input 
           type="number"
           name="id"
           min="1"
           value={newBook.id}
           onChange={handleInputChange}
           onBlur = {handleBlur}
           />
           {isTouched.id && !newBook.id && <p style={{color: 'red'}}>Enter valid ID</p>} </div>
            <div className = 'mt-4'>
          <label htmlFor='title'><b>Title:</b></label >
           <input 
           type="text"
           name="title"
           value={newBook.title}
           onChange={handleInputChange}
           onBlur = {handleBlur}
           />
           {isTouched.title && !newBook.title && <p style={{color: 'red'}}>Enter valid Title</p>} </div>
            <div className = 'mt-4'>
           <label htmlFor='author'><b>Author:</b></label >
           <input 
           type="text"
           name="author"
           value={newBook.author}
           onChange={handleInputChange}
           onBlur = {handleBlur}
           />
           {isTouched.author&& !newBook.author && <p style={{color: 'red'}}>Enter valid Author</p>} </div>

        </div>
        <div>
          <button type='submit' className='btn btn-success my-3'> Submit </button>
        </div>
      </form>
    </div>
  )
  console.log(newBook);
}

export default BookForm
