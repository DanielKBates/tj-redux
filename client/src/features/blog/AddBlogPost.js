import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./blogSlice";

const initialState = { title: "", content: "", userId: "1" };
const AddBlogPost = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch()

  const users = useSelector(state => state.users)
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    if (formData.title && formData.content) {
      dispatch(addPost(formData.title, formData.content, formData.userId))
      setFormData({ title: "", content: "" })
    }
  }

  return (
    <div className=" flex p-6 flex-col space-y-6 border-2 border-indigo-500 rounded-xl">
      <h2 className="text-3xl">Add a New Post</h2>
      <form className="flex flex-col space-y-2">
        <select value={formData.userId} name="userId" onChange={handleInputChange} className="p-2 border-indigo-400 border-2 rounded-xl">
          {users.map(user=>(
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
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
        <button onClick={handleAddPost} className=" w-1/6 border-indigo-500 border-2 rounded-xl p-3">Save Post</button>
      </form>
    </div>
  );
};

export default AddBlogPost;
