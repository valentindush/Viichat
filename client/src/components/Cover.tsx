import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet ,faListDots,faMagnifyingGlass,faPhone, faMessage, faBed, faBell, faContactBook, faTty, faEllipsis, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import ChatContact from '../components/ChatContact'
import img_a from '../assets/a.png'
import img_b from "../assets/b.png"
export const Cover = () => {
  return (
    <div className="right h-full bg-[#1a1a1a] w-[calc(100vw-350px)]">
    <div className="w-[600px] mt-12 m-auto">
        <div className="">
            <div className="profile flex justify-between items-center">
                    <div className="">
                        <div className=" flex gap-2 items-center">
                            <div className="w-24 h-24 text-5xl relative rounded-full flex items-center justify-center text-[#dc2b9b] bg-white">
                                DV
                            <div className="absolute w-6 h-6 rounded-full bg-[#dc2b9b] border-2 border-[#222] bottom-0 right-0"></div>

                            </div>
                            <div className="text-gray-300">
                            <p className='text-4xl text-gray-400'>Welcome !</p>

                                <p className='text-4xl font-medium'>dush valentin</p>
                            </div>
                        </div>
                    </div>
                    <button className='text-gray-300 border border-gray-300 p-1 px-3 rounded-full self-end text-sm hover:scale-95 active:scale-95 transition ease-out'>Share profile</button>

                </div>
        </div>
        <div className=" mt-12">
            <h2 className='text-gray-300 text-2xl font-light'>Here are quick actions to get you stated </h2>
            <div className="flex gap-2 justify-between pt-5">
                <div className="w-1/2 p-6  border-opacity-40 border border-gray-400 rounded-xl relative">
                    <img className='block m-auto' src={img_a} alt="illustration" />
                    <h3 className='text-center text-gray-300 font-medium mt-4'>Easy meetings with anyone</h3>
                    <p className='font-light text-gray-300 opacity-50 mt-4 text-center'>Share the invite with anyone even if they are't on Vibe. No signups or downloads required</p>
                    <button className='p-2 px-5 bg-gray-300 flex justify-around items-center gap-3 text-gray-800  m-auto mt-4  rounded-full hover:scale-95 transition'>
                        Meet now
                        <FontAwesomeIcon className='text-xs' icon={faAngleDown} />
                    </button>
                </div>
                <div className="w-1/2 p-6  border-opacity-40 border border-gray-400 rounded-xl relative">
                    <img className='block m-auto h-[45%]' src={img_b} alt="illustration" />
                    <h3 className='text-center text-gray-300 font-medium mt-4'>Easy meetings with anyone</h3>
                    <p className='font-light text-gray-300 opacity-50 mt-4 text-center'>Vibe to Vibe calls are always free, but you can also call mobiles and landlines from Vibe at great low rated</p>
                    <button className='p-2 px-5 bg-gray-300 text-gray-800 block  m-auto  mt-4  rounded-full hover:scale-95 transition'>Open dial pad</button>
                </div>
            </div>
        </div>
        <div className="pt-2">
            <p className='text-gray-300 text-center'>You are currently signed in as <i>codesvalentin@gmail.com</i></p>
            <p className='text-gray-300 font-light text-center'>Try <span className='text-[#dc2b9b] cursor-pointer'>switching accounts</span> in case you don't see your conversations on the left side </p>
        </div>
    </div>
</div>
  )
}
