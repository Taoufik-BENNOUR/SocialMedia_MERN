import React from 'react'
import Feed from '../feed/Feed'
import Rightbar from '../righbar/Rightbar'
import Sidebar from '../sidebar/Sidebar'
import Topbar from '../topbar/Topbar'
import "./profile.css"
const Profile = () => {
  return (
    <>
    <Topbar />
    <div className="profile">
    <Sidebar />
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img src="https://www.odysseymagazine.com/wp-content/uploads/2020/07/twilight-dusk.jpg" alt="" className="profileCoverImg" />
            <img src="https://staticg.sportskeeda.com/editor/2022/01/b0755-16425315464091-1920.jpg" alt="" className="profileUserImg" />
            </div>
        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">Trafalgar</h4>
            <span className="profileInfoDesc"> maiores beatae distinctio.</span>
        </div>
        <div className="profileRightBottom">
        <Feed />
        <Rightbar profile />
         </div>
  
    </div>
  
    </div>
    </>
  )
}

export default Profile