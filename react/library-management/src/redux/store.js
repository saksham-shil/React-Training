import {configureStore} from '@reduxjs/toolkit';
import booksReducer from './reducers/books';
import loginReducer from './reducers/login'


export const store = configureStore({
    reducer: {
        books:booksReducer,
        login:loginReducer
    }
});