
import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./register.css";

const Register = () => {
  const username=useRef()
  const email = useRef()
  const password = useRef()
  const passwordAgain = useRef()
  const navigate = useNavigate()
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(password.current.value !== passwordAgain.current.value){
      password.current.setCustomValidity("Password dont match")
    }else{
      const user = {
        username:username.current.value,
        email:email.current.value,
        password:password.current.value
      };
      try {
        const res = await axios.post("/auth/register",user)
          navigate("/login")
      } catch (error) {
        console.log(error)
      }
    }
  }
  
  
  return (
    <>
  <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">cAre</h3>
          <span className="registerDesc">
          Improving Lives Together on cAre
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleSubmit}>
            <input placeholder="Username" className="registerInput" ref={username} required />
            <input placeholder="Email" className="registerInput" type="email" ref={email} required/>
            <input placeholder="Password" className="registerInput" type="password" ref={password} />
            <input placeholder="Password Again" className="registerInput" type="password" ref={passwordAgain} required />
            <button className="registerButton" type='submit' >Sign Up</button>
           <Link to={"/login"}>
           <button type='sumbit' className="registerRegisterButton">
              Log into Account
            </button>
           </Link>
     
          </form>
        </div>
      </div>
    </div>

    </>
  )
}

export default Register