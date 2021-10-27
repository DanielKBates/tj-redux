import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", name: "User number 1" },
    { id: "2", name: "User number 2" },
    { id: "3", name: "User number 3" },
    { id: "4", name: "User number 4" },
    { id: "5", name: "User number 5" }
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})

export default usersSlice.reducer