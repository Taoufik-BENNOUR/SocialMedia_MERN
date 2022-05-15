import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./chatOnline.css"
const ChatOnline = ({onlineUsers,currentUser,setcurrentChat}) => {
  const [friends, setfriends] = useState([])
  const [onlinefriends, setonlinefriends] = useState([])
  useEffect(() => {
    const getfriends = async ()=>{
      try {
        const res = await axios.get(`/users/friends/${currentUser}`)
        setfriends(res.data)
      } catch (error) {
        
      }
    }
    getfriends()
  }, [currentUser])
  
  useEffect(() => {
    setonlinefriends(friends.filter(friend=>onlineUsers.find(el=>el.userId===friend._id)))
  }, [friends,onlineUsers])
  const handleClick = async(user)=>{
    try {
      const res = await axios.get(`/conversations/find/${currentUser}/${user._id}`)
      setcurrentChat(res.data)
    } catch (error) {
      
    }
  } 
  return (
    <div className='ChatOnline'>
       {onlinefriends.map(el=> 
       <div className="ChatOnlineFriend" onClick={()=>handleClick(el)}>
            <div className="ChatOnlineImgContainer">
            <img src="" alt="" className="ChatOnlineImg" />
            <div className="ChatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">{el.username}</span>
        </div>
     )}
    </div>
  )
}

export default ChatOnline