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
    <div className="">
      
    </div>
  )
}
