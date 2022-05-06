import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import { Posts } from '../../data'
import "./feed.css"
const Feed = () => {
  return (
    <div className='feed'>
        <div className="feedWrapper">
            <Share />
            {Posts.map(post=><Post post={post} key={post.id} />)}
        </div>
    </div>
  )
}

export default Feed