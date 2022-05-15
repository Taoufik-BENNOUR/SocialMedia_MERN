import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import ChatOnline from '../chatOnline/ChatOnline'
import Conversations from '../conversations/Conversations'
import Message from '../message/Message'
import Topbar from '../topbar/Topbar'
import axios from "axios"
import {io} from "socket.io-client"
import "./messenger.css"
const Messenger = () => {
    const [conversations, setconversations] = useState([])
    const [currentChat, setcurrentChat] = useState([])
    const [messages, setmessages] = useState([])
    const [newmessage, setnewmessage] = useState("")
    const [receivedMsg, setreceivedMsg] = useState(null)
    const [onlineUsers, setonlineUsers] = useState([])
    const socket = useRef()
    const scrollRef = useRef()
    const {user} = useContext(AuthContext)
    useEffect(() => {
        socket.current = io("ws://localhost:9000")
        socket.current.on("getMessage",data=>{
        setreceivedMsg({
            sender:data.senderId,
            text:data.text,
            createdAt:Date.now()
        })
        })
    }, [])
    useEffect(() => {
        receivedMsg && currentChat?.members.includes(receivedMsg.sender) 
        &&
        setmessages((prev)=>[...prev,receivedMsg])
    }, [receivedMsg])
    
    useEffect(() => {
      socket.current.emit("addUser",user._id)
      socket.current.on("getUsers",users=>{
    setonlineUsers(users)
    })
    }, [])
    
  
useEffect(() => {
const getConversation = async()=>{
    try {
        const response = await axios.get(`/conversations/${user._id}`)
        setconversations(response.data)
    } catch (error) {
        
    }
}

getConversation()
}, [user._id])
useEffect(() => {
 const getMessages = async ()=>{
     try {
        const res = await axios.get(`/message/${currentChat._id}`)
        setmessages(res.data)
     } catch (error) {
     }
 }
 getMessages()
}, [currentChat._id,newmessage])
const handleSubmit = async(e)=>{
    e.preventDefault()
    const message = {
        sender:user._id,
        text:newmessage,
        conversationId:currentChat._id
    }
    socket.current.emit("sendMessage",{
        senderId:user._id,
        receiverId:currentChat.members.find(m=>m !== user._id),
        text:newmessage
    })
    try {
       const res= await axios.post('/message',message)
       setmessages([...messages,res.data])
    setnewmessage("")
    } catch (error) {
        
    }
}

useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior:"smooth"})
}, [messages])

  return (<>
      <Topbar />
    <div className='messenger'>
        <div className="chatMenu">
            <div className="chatMenuWrapper">
                <input type="text" className="chatMenuInput" placeholder='Search for a friend' />
        {conversations.map((c,i)=> <div onClick={()=>setcurrentChat(c)}><Conversations currentUser={user._id} conversation={c}  key={i} /> </div>  )           }            </div>
        </div>
        <div className="chatBox">
            <div className="chatBoxWrapper">
            {currentChat ? 

               <> <div className="chatBoxTop">
            {messages.map((message,i)=> 
            <div key={i} ref={scrollRef}>
             <Message message={message} own={user._id===message.sender} key={i} /> </div> 
              )  }              
                </div>
                <div className="chatBoxBottom">
                    <textarea className='chatMessageInput' onChange={(e)=>setnewmessage(e.target.value)} placeholder="write something"></textarea>
                    <button  className="chatSumbitButton" onClick={(e)=>handleSubmit(e)}>send</button>
                </div></>:<span>Open a new conversation</span>
           }
            </div>

        </div>
        <div className="chatOnline">
            <div className="chatOnlineWrapper">
            <ChatOnline onlineUsers={onlineUsers} currentUser={user._id} setcurrentChat={setcurrentChat} />
             </div>

        </div>
    </div>
    </>
  )
}

export default Messenger