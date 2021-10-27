import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const SinglePost = ({ match }) => {
  console.log(match)
  const { postId } = match.params;

  const blogPost = useSelector((state) =>
    state.blog.find((blogItem) => blogItem.id === postId)
  );
  useEffect(() => {
    console.log(blogPost);
  }, [blogPost]);

  if (!blogPost) {
    return (
      <div>
        <h2>No posts found</h2>
      </div>
    );
  }

  return (
    <div>
      <article className="w-full">
        <h2 className="text-red-700 text-3xl">{blogPost.title}</h2>
        <p className="p-2">{blogPost.content}</p>
      </article>
    </div>
  );
};

export default SinglePost;
