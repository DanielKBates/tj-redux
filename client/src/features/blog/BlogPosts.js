import React from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

function BlogPosts() {
const blog = useSelector(state => state.blog)

    return (
        <div className="w-full flex flex-col space-y-6 divide-y divide-gray-300 bg-indigo-100 p-5  rounded-lg">
            {blog.map(post => (
                <article key={post.id} className="">
                    <h1 className="text-3xl">{post.title}</h1>
                    <p className="text-xl">{post.content.substring(0,100)}</p>
                    <Link to={`/blog/${post.id}`}>View Post</Link>
                </article>
                
            ))}
        </div>
    )
}

export default BlogPosts
