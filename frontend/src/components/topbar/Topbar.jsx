import React from "react";
import "./topbar.css"
const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">cAre</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <i class="fa fa-search" aria-hidden="true"></i>
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
            <i class="fa fa-user" aria-hidden="true"></i>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <i class="fa fa-comment"></i>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItems">
          <i class="fa fa-bell"></i>
          <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="https://wallpaperaccess.com/full/3899397.png" alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
