import React from 'react'
import './Card.css'

const Card = ({post}) => {
    return (
        <div className="card">
            <p className="card-title">{post.title}</p>
            <p className="card-author">{post.author}</p>
            <p className="card-body">{post.body}</p>
        </div>
    )
}

export default Card
