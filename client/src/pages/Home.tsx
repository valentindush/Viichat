import { useState } from "react"

const dummyUsers:{name: string}[]= [
  {name: 'user1'},
  {name: 'user2'},
  {name: 'user3'},
  {name: 'user4'},
  {name: 'user5'},
  {name: 'user6'},
  {name: 'user7'},
  {name: 'user8'},
]

const dummyMessages: {msg: string, type:"left"|"right"}[] = [
{msg: 'hello', type: 'left'},
{msg: 'hello', type: 'right'},
{msg: 'How are you', type: 'left'},
{msg: 'Lorem ipsum sgfksg sfbgk', type: 'right'},
{msg: 'Lorem ipsum sgfksg sfbgk', type: 'right'},
{msg: 'Lorem ipsum sgfksg sfbgk ksfghkdb  kdfgk dgkjsdbk fdb gfbdf', type: 'left'},
{msg: 'hello', type: 'left'},
{msg: 'hello', type: 'right'},
{msg: 'How are you', type: 'left'},
{msg: 'Lorem ipsum sgfksg sfbgk', type: 'left'},
{msg: 'Lorem ipsum sgfksg sfbgk', type: 'right'},
{msg: 'Lorem ipsum sgfksg sfbgk ksfghkdb  kdfgk dgkjsdbk fdb gfbdf', type: 'left'},
{msg: 'hello', type: 'left'},
{msg: 'hello', type: 'right'},
{msg: 'How are you', type: 'left'},
{msg: 'Lorem ipsum sgfksg sfbgk', type: 'right'},
{msg: 'Lorem ipsum sgfksg sfbgk', type: 'right'},
{msg: 'Lorem ipsum sgfksg sfbgk ksfghkdb  kdfgk dgkjsdbk fdb gfbdf', type: 'left'},
{msg: 'hello', type: 'left'},
{msg: 'hello', type: 'right'},
{msg: 'How are you', type: 'left'},
{msg: 'Lorem ipsum sgfksg sfbgk', type: 'left'},
{msg: 'Lorem ipsum sgfksg sfbgk', type: 'right'},
{msg: 'Lorem ipsum sgfksg sfbgk ksfghkdb  kdfgk dgkjsdbk fdb gfbdf', type: 'left'},

]

const Home = () => {

  const [activeUser, setActiveUser] = useState<{name: string}>(dummyUsers[0])

  return (
    <div className="p-4 flex h-screen w-screen overflow-hidden">
        <div className="w-[300px] border-r border-gray-500 mt-4 cursor-pointer overflow-auto">
          
          <div className="ml-4 text-2xl font-semibold text-purple-500 mb-12 mt-4">
            <h2>Chats</h2>
          </div>

          {dummyUsers.map((user, index)=>{
              
              return (
                <div key={index} onClick={()=>setActiveUser(user)} className={`mt-3 hover:bg-gray-100 p-2 ${activeUser.name === user.name?"bg-gray-200":""}  active:scale-95`}>
                  <div className="flex items-center gap-2">
                    <div className="w-[50px] h-[50px] rounded-full bg-purple-400 flex items-center justify-center text-white text-xl font-medium">
                      {user.name[0]}
                    </div>
                    <div className="text-gray-500">
                      {user.name}
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
        <div className="w-[calc(100%-300px)] h-screen relative">
            <header className="p-4 shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-[40px] h-[40px] rounded-full bg-purple-400 flex items-center justify-center text-white text-xl font-medium">
                  {activeUser.name[0]}
                </div>
                <div className="text-xl font-medium text-gray-700">
                  {activeUser.name}
                </div>
              </div>
            </header>

            <div className="p-4 overflow-auto h-[76%] ">
              {dummyMessages.map((msg, index)=>{

                return (
                  <div className={`max-w-[70%] p-4 ${msg.type === "right"? "bg-purple-400 ml-auto mr-0 text-white ": "bg-slate-200 text-gray-800"} w-fit mt-2`}>
                    {msg.msg}
                  </div>
                )
              })}
            </div>
            
            <div className="absolute w-full p-4 bg-white shadow-md  bottom-4 border flex gap-4">
              <input type="text" placeholder="type message" className="outline-none border p-3 border-gray-600 w-full" />
              <button className="bg-purple-400 p-3 w-24 text-white">Send</button>
            </div>

        </div>
    </div>
  )
}

export default Home