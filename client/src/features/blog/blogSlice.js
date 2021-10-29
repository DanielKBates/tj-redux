import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("blog/fetchBlogPosts", async () => {
  try {
    const dbRes = await axios.get("/api/allPosts");
    return await dbRes.data;
  } catch (error) {
    return error;
  }
});

export const postAdded = createAsyncThunk("blog/postAdded", async (data) => {
  try {
    console.log(data);
    const dbRes = await axios.post("/api/addPost", {
      id: nanoid(),
      date: new Date().toISOString(),
      title: data.title,
      content: data.content,
      user: data.userId,
      reactions: {
        thumbsUp: 0,
        heart: 0,
        thumbsDown: 0,
        eyes: 0,
        dislike: 0,
      },
    });
    return await dbRes.data;
  } catch (error) {
    return error;
  }
});

export const addReaction = createAsyncThunk(
  "blog/addReaction",
  async (payload) => {
    try {
      const { blogPostId, reaction } = payload;

      const dbRes = await axios.post("/api/addReaction", {
        id: blogPostId,
        reaction,
      });
      return await dbRes.data;
    } catch (error) {
      return error;
    }
  }
);

export const updatePost = createAsyncThunk(
  "blog/updatePost",
  async (payload) => {
    try {
      const { id, title, content } = payload;

      const dbRes = await axios.post("/api/updatePost", {
        id,
        title,
        content,
      });
      return await dbRes.data;
    } catch (error) {
      return error;
    }
  }
);
const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blog: [],
    loading: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.blog = [];
      state.loading = "loading";
    });
    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      state.blog = payload;
      state.loading = "loaded";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = "error";
      state.error = action.error.message;
    });
    builder.addCase(postAdded.fulfilled, (state, action) => {
      state.blog.push(action.payload);
    });

    builder.addCase(addReaction.fulfilled, (state, action) => {
      const { id, reactions } = action.payload;
      const existingBlogPost = state.blog.find(
        (blogPost) => blogPost.id === id
      );
      existingBlogPost.reactions = reactions;
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      const { id, title, content } = action.payload;
      console.log(action.payload)
      const existingBlogPost = state.blog.find(
        (blogPost) => blogPost.id === id
      );
      existingBlogPost.title = title;
      existingBlogPost.content = content;
    });
  },
});

export const selectAllPosts = (state) => state.blog;
export const selectPostById = (state, postId) =>
  state.blog.blog.find((blogPost) => blogPost.id === postId);
export const { postUpdated } = blogSlice.actions;
export default blogSlice.reducer;
