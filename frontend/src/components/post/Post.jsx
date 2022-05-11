import { faEllipsisV, faHeart, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import "./post.css"
import axios from 'axios'
import {format} from "timeago.js"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
const Post = ({post}) => {
    const [like, setlike] = useState(post.likes.length)
    const [isliked, setisliked] = useState(false)
    const [user, setuser] = useState({})
  const {user:currentUser} = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    setisliked(post.likes.includes(currentUser._id))
    },[currentUser._id,post.likes])
  
    useEffect(() => {
        const fetchUser = async()=>{
          try {
            const response = await axios.get(`/users?userId=${post.userId}`)  
            setuser(response.data)
    
          } catch (error) {
            console.log(error)
          }
        }
        fetchUser()
      },[post.userId])
    const likeHandler=async()=>{
      try {
       await axios.put(`/posts/${post._id}/like`,{userId:currentUser._id})
      } catch (error) {
        
      }
        setlike(isliked?like-1:like+1)
        setisliked(!isliked)
    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`/profile/${user.username}`}>
                    <img className='postProfileImg' src={PF+user.profilePicture || "https://serc.carleton.edu/download/images/54334/empty_user_icon_256.v2.png" } alt='profile' />
                    </Link>
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                <FontAwesomeIcon icon={faEllipsisV} />
                </div>
            </div>
            {post.img}
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className='postImg' alt='post' src={"./images/"+ post.img} />
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