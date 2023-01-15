import React from 'react'

interface PropsType{
    contact: {
        username:string,
        lastMsg: string,
        date: Date
        uid:string
    },
    handler:Function
}

export default function ChatContact({contact,handler} : PropsType) {

    const {uid,username,lastMsg,date} = contact

    const splitted = username.split(' ')
    const letter_a = splitted[0].split("")[0]
    const letter_b = splitted[splitted.length -1].split("")[0]

    const gradients:string[] = [
        "from-pink-400 to-red-400 ",
        "from-blue-400 to-purple-400",
        "from-slate-400 to-slate-600",
        "from-green-400 to-cyan-400",
        "from-gray-400 to-gray-600",
        "from-red-400 to-red-600",
        "from-pink-400 to-[#dc2b9b]"
    ]

    const gradientIndex = Math.floor(Math.random() * gradients.length)
    const dateOptions:{} = {
        weekday: 'short',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }

  return (
    <div className='  flex justify-between hover:bg-slate-700 rounded-lg cursor-pointer hover:bg-opacity-10 py-2 pr-3' onClick={()=>handler(uid,username)}>
        <div className="details">
            <div className="flex items-center gap-2">
                <div className={`text-white w-10 h-10 rounded-full font-semibold text-sm bg-gradient-to-br ${gradients[gradientIndex]} flex items-center justify-center `}>
                    {letter_a + letter_b}
                </div>
                <div className="text-gray-300">
                    <p className='text-lg font-medium'>{username}</p>
                    <span className='text-[14px] -mt-1 block opacity-50'>{lastMsg}</span>
                </div>
            </div>
        </div>
        <div className="date">
            <p className='text-[15px] text-gray-300 opacity-50'>{date.toLocaleDateString('en-US',dateOptions)}</p>
        </div>
    </div>
  )
}
