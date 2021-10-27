import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { updatePost } from './blogSlice'

const UpdatePost = ({ match }) => {
    const { postId } = match.params

    const post = useSelector(state =>
        state.blog.find(post => post.id === postId)
    )

    const [formData, setFormData] = useState({ title: post.title, content: post.content })

    const dispatch = useDispatch()
    const history = useHistory()

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEditSave = (e) => {
        e.preventDefault()
        if (formData.title && formData.content) {
            dispatch(updatePost({ id: postId, title: formData.title, content: formData.content }))
            history.push(`/blog/${postId}`)
        }
    }

    return (
        <section>
            <h1 className="text-3xl text-indigo-400 mb-2">Edit Post</h1>
            <form className="flex flex-col space-y-2">
                <input
                    type="text"
                    name="title"
                    className="text-2xl border-2 rounded-xl border-indigo-400 p-2"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder="Content!"
                    className="text-lg border-2 rounded-xl border-indigo-400 p-2"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                />
            </form>
            <button className="border-indigo-400 border-2 rounded-lg p-2" type="button" onClick={handleEditSave}>
                Save Post
            </button>
        </section>
    )
}

export default UpdatePost;