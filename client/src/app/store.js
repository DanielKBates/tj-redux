import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import blogReducer from "../features/blog/blogSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    blog: blogReducer,
  },
});
