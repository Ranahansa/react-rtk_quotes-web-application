import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: "Bob"
    },
    {
        id: 2,
        name: "John"
    },
    {
        id: 3,
        name: "Alice"
    }
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;