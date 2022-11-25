import { faMicrophone, faPaperPlane, faPhone, faPlus, faVideo } from '@fortawesome/free-solid-svg-icons'
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
          <div className="flex items-center gap-3">
            <div className="w-[45px] h-[45px] flex items-center justify-center text-2xl font-bold rounded-full bg-gradient-to-br from-slate-300 to-slate-600">
              {`${user.username.toString().charAt(0).toUpperCase()}`}
            </div>
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
        <div className="absolute p-5 bottom-0 bg-[#111] w-full">
          <div className="rounded-xl h-[40px] flex items-center gap-2">
            <button title='more' className='rounded-full w-12 h-10 active:scale-[.97] bg-white'>{<FontAwesomeIcon color='#F04288' icon={faPlus} />}</button>
            <button title='Voice note' className='rounded-full w-12 h-10 active:scale-[.97] bg-white'>{<FontAwesomeIcon color='#F04288' icon={faMicrophone} />}</button>
            <input type="text" placeholder='type message' className='w-full h-full rounded-full px-4 bg-transparent border border-slate-500 outline-none text-gray-300 text-sm'/>
            <button className='bg-[#b83267] py-2 px-6 rounded-xl active:scale-[.97]' title='send'>
              <FontAwesomeIcon color='white' icon={faPaperPlane} />
            </button>
          </div>
        </div>
    </div>
  )
}
