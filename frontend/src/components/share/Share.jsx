import React from 'react'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faAtom, faLocation, faLocationPin, faLocationPinLock, faMap, faPhotoVideo, faSmile, faTag } from '@fortawesome/free-solid-svg-icons'

import "./share.css"

const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
            <img src='https://staticg.sportskeeda.com/editor/2022/01/b0755-16425315464091-1920.jpg' className='shareProfileImg' />
            <input placeholder='What do you wanna share' type="text" className="shareInput" />
            </div>
            <div className="shareBottom"></div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                    <FontAwesomeIcon style={{color:"red"}} className='shareIcon' icon={faPhotoVideo}  />
                        <span className='shareOptionText'> Photo video</span>
                    </div>
                    <div className="shareOption">
                    <FontAwesomeIcon style={{color:"blue"}}  className='shareIcon' icon={faTag} />
                        <span className='shareOptionText'> Tag</span>
                    </div>
                    <div className="shareOption">
                    <FontAwesomeIcon style={{color:"green"}}  className='shareIcon' icon={faLocationPin} />
                    <span className='shareOptionText'> Location</span>
                    </div>
                    <div className="shareOption">
                    <FontAwesomeIcon className='shareIcon' icon={faSmile} />                    
                     <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className="shareButton">share</button>
            </div>
        </div>

    </div>
  )
}

export default Share