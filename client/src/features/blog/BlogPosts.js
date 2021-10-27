import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import AuthorDisplay from "./AuthorDisplay";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const BlogPosts = () => {
  const blog = useSelector((state) => state.blog);
  const sortedPosts = blog.slice().sort((a, b) => b.date.localeCompare(a.date));
  return (
    <div className="flex flex-col space-y-6 divide-y divide-gray-300 bg-indigo-100 p-5  rounded-lg">
      {sortedPosts.map((blogPost) => (
        <article key={blogPost.id} className="">
          <h1 className="text-3xl">{blogPost.title}</h1>
          <AuthorDisplay userId={blogPost.user} />
          <TimeAgo timestamp={blogPost.date} />
          <p className="text-xl">{blogPost.content.substring(0, 100)}</p>
          <Link to={`/blog/${blogPost.id}`}>View Post</Link>
          <ReactionButtons blogPost={blogPost} />
        </article>
      ))}
    </div>
  );
};

export default BlogPosts;
