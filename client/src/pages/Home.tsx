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
    

    const contacts:{lastMsg:string, username:string,uid:string,date:Date}[] = [
        {
            username: "Dush Valentin",
            lastMsg: "Hello how you doin",
            uid: `${Math.floor(Math.random() * 99999)}`,
            date: new Date()
        },
        {
            username: "Dush Valentin",
            lastMsg: "Hello how you doin",
            uid: `${Math.floor(Math.random() * 99999)}`,
            date: new Date()
        },
        {
            username: "Dush Valentin",
            lastMsg: "Hello how you doin",
            uid: `${Math.floor(Math.random() * 99999)}`,
            date: new Date()
        },
        {
            username: "Dush Valentin",
            lastMsg: "Hello how you doin",
            uid: `${Math.floor(Math.random() * 99999)}`,
            date: new Date()
        },
        {
            username: "Dush Valentin",
            lastMsg: "Hello how you doin",
            uid: `${Math.floor(Math.random() * 99999)}`,
            date: new Date()
        },
        {
            username: "Dush Valentin",
            lastMsg: "Hello how you doin",
            uid: `${Math.floor(Math.random() * 99999)}`,
            date: new Date()
        },{
            username: "Dush Valentin",
            lastMsg: "Hello how you doin",
            uid: `${Math.floor(Math.random() * 99999)}`,
            date: new Date()
        },{
            username: "Dush Valentin",
            lastMsg: "Hello how you doin",
            uid: `${Math.floor(Math.random() * 99999)}`,
            date: new Date()
        },{
            username: "Dush Valentin",
            lastMsg: "Hello how you doin",
            uid: `${Math.floor(Math.random() * 99999)}`,
            date: new Date()
        },{
            username: "Dush Valentin",
            lastMsg: "Hello how you doin",
            uid: `${Math.floor(Math.random() * 99999)}`,
            date: new Date()
        },{
            username: "Dush Valentin",
            lastMsg: "Hello how you doin",
            uid: `${Math.floor(Math.random() * 99999)}`,
            date: new Date()
        },

    ]
    const changeActiveChat=(uid:string)=>{
        setView(true)
    }
    const changeView = (opt: boolean)=>{
        setView(opt)
    }
  return (
    <div className='bg-[#222] h-screen home flex overflow-hidden'>
        <div className="left h-full w-[350px] p-4 flex flex-col">
            <div className="top pt-8">
                <div className="profile flex justify-between items-center">
                    <div className="">
                        <div className="relative flex gap-2 ">
                            <div className="w-12 h-12 relative rounded-full flex items-center justify-center text-[#dc2b9b] bg-white">
                                DV
                            <div className="absolute w-3 h-3 rounded-full bg-[#dc2b9b] border-2 border-[#222] bottom-0 right-0"></div>

                            </div>
                            <div className="text-white">
                                <p className='text-md font-medium'>dush valentin</p>
                                <p className='text-[14px] text-gray-500 font-light'>Set a status</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <FontAwesomeIcon className='text-gray-300 cursor-pointer w-4 h-4' icon={faEllipsis} />
                    </div>
                </div>
                <div className="flex w-full h-[40px] mt-8 gap-2">
                    <div className="h-full cursor-pointer rounded-xl bg-slate-700 bg-opacity-[0.25]  w-full flex items-center px-4 gap-2">
                        <FontAwesomeIcon className='text-gray-400 font-light opacity-50' icon={faMagnifyingGlass} />
                        <span className='text-gray-400 text-[13px] font-light opacity-50'>People, groups, messages</span>
                    </div>
                    <div className="h-full cursor-pointer rounded-xl bg-slate-700 bg-opacity-[0.25] w-[50px] flex items-center justify-center">
                        <FontAwesomeIcon className='text-gray-300' icon={faTty} />
                    </div>
                </div>
                <div className="menu flex justify-between px-1 mt-8 items-start">
                    <div className="flex flex-col justify-center gap-1 cursor-pointer hover:scale-95 transition ease-out hover:opacity-70 text-gray-300 hover:text-[#dc2b9b]">
                        <FontAwesomeIcon className=' text-md' icon={faMessage} />
                        <span className='block   text-xs'>Chats</span>
                    </div>
                    <div className="flex flex-col justify-center gap-1 cursor-pointer hover:scale-95 transition ease-out hover:opacity-70 text-gray-300 hover:text-[#dc2b9b]">
                        <FontAwesomeIcon className=' text-md' icon={faPhone} />
                        <span className='block   text-xs'>Calls</span>
                    </div>
                    <div className="flex flex-col justify-center gap-1 cursor-pointer hover:scale-95 transition ease-out hover:opacity-70 text-gray-300 hover:text-[#dc2b9b]">
                        <FontAwesomeIcon className=' text-md' icon={faContactBook} />
                        <span className='block   text-xs'>Contacts</span>
                    </div>
                    <div className="flex flex-col justify-center gap-1 cursor-pointer hover:scale-95 transition ease-out hover:opacity-70 text-gray-300 hover:text-[#dc2b9b]">
                        <FontAwesomeIcon className=' text-md' icon={faBell} />
                        <span className='block   text-xs'>Notifications</span>
                    </div>
                </div>
                <div className="btns flex justify-between gap-3 mt-4">
                    <button className='w-1/2 rounded-full flex items-center justify-around
                     text-gray-300 border border-gray-500 bg-slate-700 bg-opacity-25 p-[6px] px-3 border-opacity-60 hover:scale-[.99] font-light text-sm active:scale-95 transition ease-out'>Meet now
                    <FontAwesomeIcon icon={faAngleDown} /></button>
                    <button className='w-1/2 rounded-full flex items-center justify-around
                     text-gray-300 border border-gray-500 bg-slate-700 bg-opacity-25 p-[6px] px-3 border-opacity-60 hover:scale-[.99] font-light text-sm active:scale-95 transition ease-out'>Contacts
                    <FontAwesomeIcon icon={faAngleDown} /></button>
                </div>
            </div>
            
            <div className="chats pt-4 h-full">
                <h2 className='flex items-center gap-3 text-gray-300'>Recent chats
                    <FontAwesomeIcon className='text-xs' icon={faAngleDown} />
                </h2>
                <div className="flex flex-col gap-1 overflow-auto h-[67%] pt-4">
                   {contacts.map((contact)=>{
                    return <ChatContact contact={contact} handler={changeActiveChat} />
                   })}
                </div>
            </div>
        </div>
        {view?<ChatContainer /> : <Cover/>}
    </div>
    
  )
}
