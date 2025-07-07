import {createSlice} from '@reduxjs/toolkit'
import initialBooks from '../../data/bookslist.json'

const initialState = {
    books : initialBooks
}

export const bookSlice = createSlice ({
    name:'books',
    initialState,
    reducers: {
        addBook: (state, action) => {state.books.unshift(action.payload)}
    }
})

export const {addBook} = bookSlice.actions
export default bookSlice.reducer
