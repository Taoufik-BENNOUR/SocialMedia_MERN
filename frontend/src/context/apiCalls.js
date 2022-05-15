import axios from "axios";

export const loginCall = async (userCred,dispatch)=>{
    dispatch({type:"LOGIN_LOADING"});
    try {
        const res = await axios.post("/auth/login",userCred)
    dispatch({type:"LOGIN_SUCCESS",payload:res.data})    
    } catch (error) {
        dispatch({type:"LOGIN_FAILED",payload:error})
    }
} 

export const logout = async (dispatch)=>{
    dispatch({type:"LOGOUT"})
    localStorage.removeItem("user")
} 