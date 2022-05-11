import React, { useEffect, useState } from 'react'
import Feed from '../feed/Feed'
import Rightbar from '../righbar/Rightbar'
import Sidebar from '../sidebar/Sidebar'
import Topbar from '../topbar/Topbar'
import axios from "axios"
import "./profile.css"
import { useParams } from 'react-router-dom'
const Profile = () => {
  const [user, setuser] = useState({})
  const {username} = useParams()
  useEffect(() => {
      const fetchUser = async()=>{
        try {
          const response = await axios.get(`/users?username=${username}`)  
          setuser(response.data)
  
        } catch (error) {
          console.log(error)
        }
      }
      fetchUser()
    },[username])
  return (
    <>
    <Topbar />
    <div className="profile">
    <Sidebar />
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img src="https://www.odysseymagazine.com/wp-content/uploads/2020/07/twilight-dusk.jpg" alt="" className="profileCoverImg" />
            <img src={user.profilePicture ||"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" } alt="" className="profileUserImg" />
            </div>
        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">{user.username}</h4>
            <span className="profileInfoDesc"> {user.desc} </span>
        </div>
        <div className="profileRightBottom">
        <Feed username={username}/>
        <Rightbar user={user} />
         </div>
  
    </div>
  
    </div>
    </>
  )
}

export default Profile