import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map((post) => (
        <article
            key={post.id}
            className="bg-white rounded-lg shadow-lg p-6 mb-6"
        >
            <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-700">{post.content.substring(0, 100)}...</p>
            <p className='text-gray-700 text-right font-bold'>
                <PostAuthor userId = {post.userId} />
                <br />
                <TimeAgo timestamp = {post.date} />
            </p>
        </article>
    ))

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">Posts</h2>
            {renderedPosts}
        </div>
    )
}

export default PostsList