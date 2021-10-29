import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addReaction, selectPostById } from "./blogSlice";

const reactions = {
  thumbsUp: "👍",
  heart: "❤️",
  eyes: "👀",
  thumbsDown: "👎",
  dislike: "😡",
};

const ReactionButtons = ({ blogPost }) => {
  const postReactions = useSelector((state) =>
    state.blog.blog.find((post) => blogPost.id === post.id)
  );
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactions).map(([reaction, emoji]) => {
    return (
      <button
        key={reaction}
        onClick={(e) => {
          e.preventDefault();
          dispatch(addReaction({ blogPostId: blogPost.id, reaction }));
        }}
      >
        {emoji} {postReactions.reactions[reaction]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
