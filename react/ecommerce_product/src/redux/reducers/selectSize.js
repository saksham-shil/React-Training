import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    selectedSize : null
};

export const selectSizeSlice = createSlice({
    name : 'selectedSize', 
    initialState : initialState,
    reducers : {
        setSelectedSize : (state, action) => {
            state.selectedSize = action.payload
        }
    }
})

export const {setSelectedSize} = selectSizeSlice.actions;
export default selectSizeSlice.reducer