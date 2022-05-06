import React from 'react'
import "./online.css"
const Online = ({user}) => {
  return (
    <li className="rightbarFriend">
    <div className="rightbarProfileImgContainer">
        <img  src="data:image/png;base64,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" alt="" className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername">{user.username}</span>

</li>
  )
}

export default Online