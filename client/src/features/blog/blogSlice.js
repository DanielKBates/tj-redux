import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "First Post",
    content: "Hello World",
    user: "1",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      heart: 0,
      thumbsDown: 0,
      eyes: 0,
      dislike: 0,
    },
  },
  {
    id: "2",
    title: "second Post",
    content: "second post content",
    user: "2",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      heart: 0,
      thumbsDown: 0,
      eyes: 0,
      dislike: 0,
    },
  },
];

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
            reactions: {
              thumbsUp: 0,
              heart: 0,
              thumbsDown: 0,
              eyes: 0,
              dislike: 0,
            },
          },
        };
      },
    },
    reactionAdded: (state, action) => {
      const { blogPostId, reaction } = action.payload;
      const existingBlogPost = state.find(
        (blogPost) => blogPost.id === blogPostId
      );
      if (existingBlogPost) {
        existingBlogPost.reactions[reaction]++;
      }
    },
    postUpdated: (state, action) => {
      const { id, title, content } = action.payload;
      const existingPost = state.find((blogPost) => blogPost.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const { postAdded, postUpdated, reactionAdded } = blogSlice.actions;
export default blogSlice.reducer;
