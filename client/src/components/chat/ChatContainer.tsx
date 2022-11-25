import { faPhone, faVideo } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Message } from './message'
interface propTypes { 
  user: {username:string, uuid:string},
}

export const ChatContainer = ({user} : propTypes) => {

  const messages:{message:string,uid:string}[] = [
    {message: "Hello bfbf", uid:"ssss"},
    {message: "Hello bfbf", uid:"ssss"},
    {message: "Hello bfbf shfshshshsfh shsfh shsf sjsjs sfjss sfjs sfj Hello bfbf shfshshshsfh shsfh shsf sjsjs sfjss sfjs sfj Hello bfbf shfshshshsfh shsfh shsf sjsjs sfjss sfjs sfj", uid:user.uuid},
    {message: "Hello ssfhshsf  bfbf", uid:user.uuid},
    {message: "Hello bfbf sfsfhsf", uid:"ssss"},
    {message: "Hello bfbf", uid:"ssss"},
    {message: "Hello bfbf", uid:"ssss"},
    {message: "Hello bfbf", uid:"ssss"},
    {message: "Hello bfbf", uid:user.uuid},
    {message: "Hello ssfhshsf  bfbf", uid:user.uuid},
    {message: "Hello bfbf sfsfhsf", uid:"ssss"},
    {message: "Hello bfbf", uid:"ssss"},
    {message: "Hello bfbf", uid:"ssss"},
    {message: "Hello bfbf", uid:"ssss"},
    {message: "Hello bfbf", uid:user.uuid},
    {message: "Hello ssfhshsf  bfbf", uid:user.uuid},
    {message: "Hello bfbf sfsfhsf", uid:"ssss"},
    {message: "Hello bfbf", uid:"ssss"},
        {message: "Hello bfbf", uid:"ssss"},
    {message: "Hello bfbf", uid:"ssss"},
    {message: "Hello bfbf", uid:user.uuid},
    {message: "Hello ssfhshsf  bfbf", uid:user.uuid},
    {message: "Hello bfbf sfsfhsf", uid:"ssss"},
    {message: "Hello bfbf", uid:"ssss"},
    {message: "Hello bfbf", uid:"ssss"},
    {message: "Hello bfbf", uid:"ssss"},
    {message: "Hello bfbf", uid:user.uuid},
    {message: "Hello ssfhshsf  bfbf", uid:user.uuid},
    {message: "Hello bfbf sfsfhsf", uid:"ssss"},
    {message: "Hello bfbf", uid:"ssss"},
    {message: "Hello bfbf", uid:"ssss"},
    {message: "Hello bfbf", uid:"ssss"},
    {message: "Hello bfbf", uid:user.uuid},
    {message: "Hello ssfhshsf  bfbf", uid:user.uuid},
    {message: "Hello bfbf sfsfhsf", uid:"ssss"},
    {message: "Hello bfbf", uid:"ssss"},
  ]

  return (
    <div className='right h-full bg-[#1a1a1a] w-[calc(100vw-350px)] relative'>
        <header className='h-[60px] bg-[#111] shadow-xl p-4 px-9 flex items-center justify-between'>
          <div className="">
            <p className='text-gray-300 text-lg font-bold'>{user.username}</p>
          </div>
          <div className="flex gap-3">
            <button className='p-2'>{<FontAwesomeIcon  color='white' icon={faPhone}/>}</button>
            <button className='p-2'>{<FontAwesomeIcon  color='white' icon={faVideo}/>}</button>
          </div>
        </header>
        <div className="msgs h-full px-6 overflow-y-auto">
        {messages.map((msg,index)=>{
          return <Message key={index} type={msg.uid == user.uuid?"right":"left"} msg={msg.message} />
        })}
        </div>
        <div className="absolute border p-5">
          
        </div>
    </div>
  )
}
