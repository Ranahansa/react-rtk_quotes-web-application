import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postsSlice'
import { useNavigate } from 'react-router-dom'

const AddPostForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdded({ id: nanoid(), title, content }))
            setTitle('')
            setContent('')
            navigate('/')
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Add a New Post</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="postTitle" className="block text-gray-700 font-bold mb-2">
                        Post Title:
                    </label>
                    <input
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChanged}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="postContent" className="block text-gray-700 font-bold mb-2">
                        Post Content:
                    </label>
                    <textarea
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={onContentChanged}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button
                    onClick={onSavePostClicked}
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Save Post
                </button>
            </form>
        </div>
    )
}

export default AddPostForm