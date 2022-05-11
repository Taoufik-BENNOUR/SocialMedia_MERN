import React, { useContext, useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./feed.css"
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
const Feed = ({username}) => {
  const [posts, setposts] = useState([])
  const {user} = useContext(AuthContext)
  useEffect(() => {
    const fetchPosts = async()=>{
      try {
        const response =username?await axios.get(`/posts/profile/${username}`) 
         : 
        await axios.get(`/posts/timeline/${user._id}`)  
        setposts(response.data.sort((a,b)=>{
          return new Date(b.createdAt) - new Date(a.createdAt)
        }))

      } catch (error) {
        console.log(error)
      }
    }
fetchPosts()
  },[username,user.id])
  

  return (
    <div className='feed'>
        <div className="feedWrapper">
{(!username || username === user.username) &&     <Share />}   
         {posts.map((post,i)=><Post post={post} key={i} />)}
        </div>
    </div>
  )
}

export default Feed