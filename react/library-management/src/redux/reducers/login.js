import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    token : null
};

export const loginSlice = createSlice({
    name : 'login', 
    initialState : initialState,
    reducers : {
        setToken : (state, action) => {
            state.token = action.payload
        }
    }
})

export const {setToken} = loginSlice.actions;
export default loginSlice.reducer