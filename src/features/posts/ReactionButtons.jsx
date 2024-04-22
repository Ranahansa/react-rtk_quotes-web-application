import { useDispatch } from 'react-redux'
import React from 'react'
import { reactionAdded } from './postsSlice'

const reactionEmojis = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕',
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmojis).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="muted-button reaction-button"
                onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
            >
                {emoji} {post.reactions ? post.reactions[name] : 0}
            </button>
        )
    })

    return <div>{reactionButtons}</div>
}

export default ReactionButtons