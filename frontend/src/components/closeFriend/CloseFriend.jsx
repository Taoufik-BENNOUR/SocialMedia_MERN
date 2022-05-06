import React from 'react'
import "./closefriend.css"
const CloseFriend = ({user}) => {
  return (
    <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="https://shogi-pineapple.com/wp-content/uploads/2022/02/1645536117_Attack-on-Titan-finally-remembers-that-Levi-exists-and-gives.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">{user.username}</span>
          </li>
         
        </ul>
  )
}

export default CloseFriend