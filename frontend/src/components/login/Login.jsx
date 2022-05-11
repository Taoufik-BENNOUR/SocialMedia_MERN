import React, { useContext, useEffect, useRef } from 'react'
import { loginCall } from '../../context/apiCalls'
import { AuthContext } from '../../context/AuthContext'
import "./login.css"
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {

  const email = useRef()
  const password = useRef()
const {isLoading,dispatch} = useContext(AuthContext)
  const handeClick=(e)=>{
e.preventDefault()
  loginCall({email:email.current.value,password:password.current.value}
    ,dispatch)
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">cAre</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on cAre.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handeClick}>
            <input placeholder="Email" type="email" className="loginInput" ref={email} required/>
            <input placeholder="Password" type="password" className="loginInput"  ref={password} required/>
            <button className="loginButton" disabled={isLoading}>{isLoading?<CircularProgress  /> :"Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
             {isLoading?<CircularProgress  /> :"Create a New Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login