import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
interface propTypes { 
  user: {username:string, uuid:string},
}

export const ChatContainer = ({user} : propTypes) => {
  return (
    <div className='right h-full bg-[#1a1a1a] w-[calc(100vw-350px)] relative'>
        <header className='h-[60px] bg-[#111] shadow-xl p-4 flex'>
          <div className="">
            <p className='text-gray-300 text-lg font-bold'>{user.username}</p>
          </div>
          <div className="">
            <button>{<FontAwesomeIcon icon={faPhone} />}</button>
          </div>
        </header>
    </div>
  )
}
