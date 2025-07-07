import React, { useState, useEffect, useReducer } from 'react';
import {useDispatch} from 'react-redux'
import {addBook} from '../../redux/slices/booksSlice'

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return { ...state, value: action.payload };
    case 'INPUT_TOUCHED':
      return { ...state, isTouched: true };
    case 'RESET':
      return { value: '', isTouched: false };
    default:
      return state;
  }
};

const BookForm = () => {
  const [newBook, setNewBook] = useState({ id: '', author: '' });
  const [isTouched, setTouched] = useState({});
  const [isFormValid, setFormValid] = useState(false);

  const [title, titleDispatch] = useReducer(reducer, { value: '', isTouched: false });

  useEffect(() => {
    const timerId = setTimeout(() => {
      const validity = newBook.id && title.value && newBook.author;
      setFormValid(validity);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [newBook, title]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'title') {
      titleDispatch({ type: 'INPUT_CHANGE', payload: value });
    } else {
      setNewBook((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    if (name === 'title') {
      titleDispatch({ type: 'INPUT_TOUCHED' });
    } else {
      setTouched({ ...isTouched, [name]: true });
    }
  };

  const reduxDispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      const newBookAdded = {
        id: newBook.id,
        title: title.value,
        author: newBook.author,
      };
      // onBookAdd(newBookAdded);
      reduxDispatch (addBook(newBookAdded));

      setNewBook({ id: '', author: '' });
      titleDispatch({ type: 'RESET' });
      setTouched({});
    } else {
      titleDispatch({ type: 'INPUT_TOUCHED' });
      setTouched({ id: true, author: true });
    }
  };

  return (
    <div className='container'>
      <h2> Add new Book </h2>
      <form onSubmit={handleSubmit}>
        <div className='mt-4'>
          <label htmlFor='id'><b>Book ID:</b></label><br />
          <input type="number" name="id" min="1" value={newBook.id} onChange={handleInputChange} onBlur={handleBlur} />
          {isTouched.id && !newBook.id && <p style={{ color: 'red' }}>Enter valid ID</p>}
        </div>

        <div className='mt-4'>
          <label htmlFor='title'><b>Title:</b></label><br />
          <input
            type="text"
            name="title"
            value={title.value}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {title.isTouched && !title.value && <p style={{ color: 'red' }}>Enter valid Title</p>}
        </div>

        <div className='mt-4'>
          <label htmlFor='author'><b>Author:</b></label><br />
          <input type="text" name="author" value={newBook.author} onChange={handleInputChange} onBlur={handleBlur} />
          {isTouched.author && !newBook.author && <p style={{ color: 'red' }}>Enter valid Author name</p>}
        </div>

        <div>
          <button type='submit' className='btn btn-success my-3'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;