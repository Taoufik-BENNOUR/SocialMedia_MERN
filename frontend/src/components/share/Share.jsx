import React, { useContext, useRef, useState } from 'react'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import {  faLocationPin, faPhotoVideo, faSmile, faTag } from '@fortawesome/free-solid-svg-icons'
import "./share.css"
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

const Share = () => {
    const {user} = useContext(AuthContext)
    const desc = useRef()
    const [file, setfile] = useState(null)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER 
    const submitHandler = async (e) => {
      e.preventDefault();
      const newPost = {
        userId: user._id,
        desc: desc.current.value,
      };
      if (file) {
        const data = new FormData();
        const fileName = Date.now() + file.name;
        data.append("name", fileName);
        data.append("file", file);
        newPost.img = fileName;
        try {
          await axios.post("/upload", data);
        } catch (err) {}
      }
      try {
        await axios.post("/posts", newPost);
        window.location.reload();
      } catch (err) {}
    };
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
            <img  className='shareProfileImg' alt='feed' src='https://staticg.sportskeeda.com/editor/2022/01/b0755-16425315464091-1920.jpg'/>
            <input placeholder={'What do you wanna share '+user.username} ref={desc} type="text" className="shareInput" />
            </div>
            <hr className="shareHr" />
            {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <div className="shareCancelImg" onClick={() => setfile(null)} >X</div>
          </div>
        )}
            <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor='file' className="shareOption">
                    <FontAwesomeIcon style={{color:"red"}} className='shareIcon' icon={faPhotoVideo}  />
                        <span className='shareOptionText'> Photo video</span>
                        <input type="file" id="file" accept='.png,.jpg,jpeg' style={{display:"none"}} onChange={(e)=>setfile(e.target.files[0])} />
                    </label>
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
                <button className="shareButton" type='submit'>share</button>
            </form>
        </div>

    </div>
  )
}

export default Share