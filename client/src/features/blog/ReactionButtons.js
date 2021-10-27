import React from "react";

import { useDispatch } from "react-redux";

import { reactionAdded } from "./blogSlice";

const reactions = {
  thumbsUp: "👍",
  heart: "❤️",
  eyes: "👀",
  thumbsDown: "👎",
  dislike: "😡",
};

const ReactionButtons = ({ blogPost }) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactions).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionAdded({ blogPostId: blogPost.id, reaction: name }))
        }
      >
        {emoji} {blogPost.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
