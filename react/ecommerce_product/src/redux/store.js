import {configureStore} from '@reduxjs/toolkit';
import selectSizeReducer from './reducers/selectSize'


export const store = configureStore({
    reducer: {
        selectedSize:selectSizeReducer,
    }
});