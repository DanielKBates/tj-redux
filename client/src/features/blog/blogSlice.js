import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchPosts = createAsyncThunk(
  "blog/fetchBlogPosts",
  async () => {
    try {
      const dbRes = await axios.get("/api/allPosts");
      console.log("yooo" + dbRes)
      return await dbRes.json();
    } catch (error) {
      return error
    }
  }
);

export const postAdded = createAsyncThunk(
  "blog/postAdded",
  async (initialPost) => {
    try{
      console.log(initialPost)
      const dbRes = await axios.post("/api/addPost", {
        id: nanoid(),
        date: new Date().toISOString(),
        title: initialPost.title,
        content: initialPost.content,
        user: initialPost.userId,
        reactions: {
          thumbsUp: 0,
          heart: 0,
          thumbsDown: 0,
          eyes: 0,
          dislike: 0,
        }
      })
      return await dbRes.data
    }
    catch(error) {
      return error
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
  reducers: {
    // postAdded: {
    //   reducer(state, action) {
    //     state.blog.push(action.payload);
    //   },
    //   prepare(title, content, userId) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         date: new Date().toISOString(),
    //         title,
    //         content,
    //         user: userId,
    //         reactions: {
    //           thumbsUp: 0,
    //           heart: 0,
    //           thumbsDown: 0,
    //           eyes: 0,
    //           dislike: 0,
    //         },
    //       },
    //     };
    //   },
    // },
    reactionAdded: (state, action) => {
      const { blogPostId, reaction } = action.payload;
      const existingBlogPost = state.blog.find(
        (blogPost) => blogPost.id === blogPostId
      );
      if (existingBlogPost) {
        existingBlogPost.reactions[reaction]++;
      }
    },
    postUpdated: (state, action) => {
      const { id, title, content } = action.payload;
      const existingPost = state.blog.find((blogPost) => blogPost.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
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
      state.blog.push(action.payload)
    })
  },
});

export const selectAllPosts = (state) => state.blog;
export const selectPostById = (state, postId) =>
  state.blog.find((blogPost) => blogPost.id === postId);
export const { postUpdated, reactionAdded } = blogSlice.actions;
export default blogSlice.reducer;
