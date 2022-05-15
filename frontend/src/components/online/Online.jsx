import React from 'react'
import "./online.css"
const Online = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER 
  return (
    <li className="rightbarFriend">
    <div className="rightbarProfileImgContainer">
        <img  src="https://image.shutterstock.com/image-photo/black-large-heavy-thick-metal-600w-1081705028.jpg" alt="" className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername">{user.username}</span>

</li>
  )
}

export default Online