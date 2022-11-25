import React from 'react'

interface propTypes{
    msg: string,
    type:string
}
export const Message = ({msg,type}: propTypes) => {
  return (
    <div className={`text-gray-300 bg-pink-500 w-fit max-w-[70%] p-3 m-2 rounded-lg ${type == "right"?"mr-0 ml-auto":""}`}>
        {msg}
    </div>
  )
}
