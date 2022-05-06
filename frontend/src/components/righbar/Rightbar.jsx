import React from 'react'
import Online from '../online/Online'
import "./rightbar.css"
import { Users } from '../../data'
const Rightbar = ({profile}) => {

    const HomeRightbar = ()=>{
        return( 
            <>
               <div className="birthdayContainer">
                <img src="https://cdn-icons-png.flaticon.com/512/4481/4481025.png" alt="" className="birthdayImg" />
                <span className="birthdayText">
                <b>Moro</b> and <b>2 other friends</b> have a birthday today
                </span>
             </div>
               <img src="data:image/png;base64,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" alt="" className="righbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(user=><Online user={user} />)}
                </ul>
            </>
        )
    }
    const ProfileRightbar = () =>{
        return(
            <>
            <h4 className='rightbarTitle'>User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single York</span>
                </div>
            </div>
            <h4 className="rightbarTi">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="" alt=""  />
                    <span className="rightbarFollowingName">Mehdi</span>
                </div>
            </div>
            </>
        )
    }
  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
        {profile? <ProfileRightbar/>:  <HomeRightbar />}
        </div>
        </div>
  )
}

export default Rightbar