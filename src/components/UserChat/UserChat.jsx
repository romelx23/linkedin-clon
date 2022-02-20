import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { offChat, showChat } from '../../actions/toggle';
import { useFriends} from '../../hooks/useSearchUser';
import { ChatItem } from '../ChatItem/ChatItem';

export const UserChat = () => {
    const {uid}=useSelector(state=>state.auth)
    const {users:usersFriends}=useFriends(uid);
    const dispatch=useDispatch()
    const { chatOn } = useSelector((state) => state.toggle);
    const handleShow = () => {
        if (!chatOn) {
          dispatch(showChat());
        }
        if (chatOn) {
          dispatch(offChat());
        }
      };
      
  return (
    <div className={`${chatOn?'h-chat':'h-16'} fixed bottom-0 right-24  bg-blue-500 w-64  min-h-fit`}>
        <div onClick={handleShow} className='bg-blue-400 text-white font-semibold text-xl py-3 hover:cursor-pointer'>Chat de Usuarios
        <i className={`${chatOn?'fa-chevron-down':'fa-chevron-up'} fas  absolute right-5 top-4`}></i>
        </div>
        {
            usersFriends.map(el=>{
                return <ChatItem key={el.id} item={el}/>
            })
        }
    </div>
  )
}
