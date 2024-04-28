import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: false
}

const filmsSlice = createSlice({
    name: 'films',
    initialState, 
    reducers: {
        setFilmsData: (state, action) => {
            state.data = action.payload 
        },
        setError: (state) => {
            state.error = true
        }
    }
})

export const {setFilmsData, setError} = filmsSlice.actions

export default filmsSlice.reducer