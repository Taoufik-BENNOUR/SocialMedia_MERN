import { faBookBookmark, faBriefcase, faCalendarCheck, faFeed, faGraduationCap, faMessage, faQuestion, faQuestionCircle, faSchool, faSchoolFlag, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CloseFriend from '../closeFriend/CloseFriend'
import "./sidebar.css"
import { Users } from '../../data'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">

          <li className="sidebarListItem">
          <FontAwesomeIcon className="sidebarIcon" icon={faFeed}/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon className="sidebarIcon" icon={faMessage}/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon className="sidebarIcon" icon={faVideo}/>
          <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon className="sidebarIcon" icon={faUserGroup}/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon className="sidebarIcon" icon={faBookBookmark}/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon className="sidebarIcon" icon={faQuestionCircle}/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon className="sidebarIcon" icon={faBriefcase}/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon className="sidebarIcon" icon={faCalendarCheck}/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon className="sidebarIcon" icon={faGraduationCap}/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />
        {Users.map(el => <CloseFriend user={el}/>
 )}
      </div>
        
    </div>
  )
}

export default Sidebar