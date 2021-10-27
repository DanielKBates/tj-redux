import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:"1", title:"First Post", content: "Hello World"},
    {id:"2", title: "second Post", content: "second post content"}
]

const blogSlice = createSlice({
    name:"blog",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addPost } = blogSlice.actions
export default blogSlice.reducer