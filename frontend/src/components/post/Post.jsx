import { faEllipsisV, faHeart, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import "./post.css"
const Post = ({post}) => {
    const [like, setlike] = useState(post.like)
    const [isliked, setisliked] = useState(false)
    const likeHandler=()=>{
        setlike(isliked?like-1:like+1)
        setisliked(!isliked)
    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src='https://staticg.sportskeeda.com/editor/2022/01/b0755-16425315464091-1920.jpg' alt='i' />
                    <span className="postUsername">Taoufik</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                <FontAwesomeIcon icon={faEllipsisV} />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img className='postImg' src='https://as01.epimg.net/meristation_en/imagenes/2022/02/17/news/1645059859_923391_1645060061_noticia_normal.jpg' />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <FontAwesomeIcon className='likeIcon thump' onClick={likeHandler} icon={faThumbsUp}/>

                    <FontAwesomeIcon className='likeIcon heart' onClick={likeHandler} icon={faHeart}/>
                <span className="postLikeCounter">{like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">
                        {post.comment} comments
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post