import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet ,faListDots,faMagnifyingGlass,faPhone, faMessage, faBed, faBell, faContactBook, faTty, faEllipsis, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import ChatContact from '../components/ChatContact'
import img_a from '../assets/a.png'
import img_b from "../assets/b.png"
import { Cover } from '../components/Cover'
import { ChatContainer } from '../components/chat/ChatContainer'

export const Home = () => {

    const [view,setView] = useState(false)
    const [activeContact,setActiveContact] = useState<{uuid:string,username:string}>({uuid:"",username:""})
    

    const contacts:{lastMsg:string, username:string,uid:string,date:Date}[] = [
       {
            username: "Kendric lamar",
            lastMsg: "Hello how you doin",
            uid: `${Math.floor(Math.random() * 99999)}`,
            date: new Date()
        },{
            username: "Franklin",
            lastMsg: "Hello how you doin",
            uid: `${Math.floor(Math.random() * 99999)}`,
            date: new Date()
        },{
            username: "Dush",
            lastMsg: "Hello how you doin",
            uid: `${Math.floor(Math.random() * 99999)}`,
            date: new Date()
        },

    ]
    const changeActiveChat=(uid:string,username:string)=>{
        setView(true)
        setActiveContact({username:username,uuid:uid})
    }
    const changeView = (opt: boolean)=>{
        setView(opt)
    }
  return (
    <div className='bg-[#222] h-screen home flex overflow-hidden'>
       
        <ChatContainer />
    </div>
    
  )
}
