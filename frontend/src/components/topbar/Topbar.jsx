import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../context/apiCalls";
import { AuthContext } from "../../context/AuthContext";
import "./topbar.css"

const Topbar = () => {
  const {user} = useContext(AuthContext)
  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

const handleClick=(e)=>{
  e.preventDefault()
    logout(dispatch)
    
}
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to={"/"} style={{textDecoration:"none"}}>
        <span className="logo">cAre</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input placeholder="Search for" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarlink"></span>
          <span className="topbarlink"></span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItems">
            <i className="fa fa-user" aria-hidden="true"></i>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <Link to={"/messenger"}><i className="fa fa-comment"></i></Link>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItems">
          <i className="fa fa-bell"></i>
          <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
          <FontAwesomeIcon className="topbarIconItems" onClick={(e)=>{handleClick(e)
          navigate('/login')}} icon={faSignOut} />
          </div>

        </div>
        <Link to={`/profile/${user.username}`}>
        <img src="https://wallpaperaccess.com/full/3899397.png" alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
