import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { addPost } from "./blogSlice";

const initialState = { title: "", content: "" };
const AddBlogPost = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddPost = (e) => {
      e.preventDefault();
      if (formData.title && formData.content){
          dispatch( addPost({id: nanoid(), title: formData.title, content: formData.content}))
      }
      setFormData({title: "", content: ""})
  }

  return (
    <div className="w-full flex p-6 flex-col space-y-6 border-2 border-indigo-500 rounded-xl">
      <h2 className="text-3xl">Add a New Post</h2>
      <form className="flex flex-col space-y-2">
        <input
          type="text"
          placeholder="Title"
          className="border-indigo-500 border-2  rounded-xl w-1/3 p-2"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <textarea
          className="border-indigo-500 border-2  rounded-xl w-2/3  p-2"
          placeholder="Content"
          name="content"
          value={formData.content}
          onChange={handleInputChange}
        />
        <button onClick={handleAddPost} className="w-1/12 border-indigo-500 border-2 rounded-xl p-3">Save Post</button>
      </form>
    </div>
  );
};

export default AddBlogPost;
