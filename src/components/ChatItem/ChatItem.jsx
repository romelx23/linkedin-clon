import React from 'react'

export const ChatItem = ({item}) => {
    const {displayName,photoURL}=item;
    const handleChat=()=>{
      console.log(item);
    }
    // console.log(item);
  return (
    <div className='bg-blue-800 border-y flex items-center py-3 px-3 hover:cursor-pointer' onClick={handleChat}>
        <img src={photoURL} alt="avatar" className='w-10 h-10 object-cover rounded-full'/>
        <h3 className='pl-3 text-white font-medium'>{displayName}</h3>
        <div className="flex flex-1 justify-end pr-2">
            <div className='w-4 h-4 bg-green-400 rounded-full'></div>
        </div>
    </div>
  )
}
