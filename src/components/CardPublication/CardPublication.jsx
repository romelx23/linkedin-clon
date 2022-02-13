import moment from "moment";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'moment/locale/es'

export const CardPublication = ({item}) => {
  const navigate=useNavigate();
  const {date,displayName,img,likes,message,photoURL,id,video,event}=item;
  // const [count, setCount] = useState(0);
  const hourParsed=moment(date).locale('es').startOf('minutes').fromNow(); 
  const eventoParse=new Date(event);
  const eventParsed=moment(eventoParse).endOf('minutes').fromNow();   
  const handleLike=()=>{
    console.log("liked");
    // if(count===0) setCount(count+1);
    // if(count===1) setCount(count-1)
  }
  // console.log(count);
  const handleNavigate=()=>{
    navigate(`/home/coments/${id}`);
  }
  const handleShare=async()=>{
    const shareData = {
      title: 'Linkedin Clon',
      text: 'Aprende desarrollo web en MDN!',
      url: `http://localhost:3000/home/coments/${id}`
    }
    try {
      await navigator.share(shareData)
    } catch(err) {
      console.log(err);
    }
  }
  return (
    <div className="cardPublication">
      <div className="flex justify-between border-b border-gray-400 mb-2 w-full">
        <div className="flex gap-2">
          <h4>logo</h4>
          <h4 className="font-semibold">A Alicorp le encata esto</h4>
        </div>
        <i className="fas fa-ellipsis-h hover:cursor-pointer hover:text-gray-200"></i>
      </div>
      <div className="flex w-full p-2">
        <img
          src={photoURL?photoURL:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/20/20cab307ebf57b54d7eb181ceaf55d8c7a9cf71f.jpg"}
          alt="avatar"
          className="w-16 h-16 rounded-full"
        />
        <div className="flex-1 text-left pl-3">
          <h3 className="font-semibold">{displayName?displayName:'name'}</h3>
          <h4 className="font-light text-sm">
            Ejecutivo de Importancia de Alicorp
          </h4>
          <h4 className="font-light text-sm">{hourParsed}</h4>
        </div>
      </div>
      <h3 className="w-full text-left font-semibold">{message}</h3>
      {
        img?<img
        src={img?img:"https://media.discordapp.net/attachments/847958546842517546/940249178418847764/273496718_1010124942934848_5790225795560095651_n.png?width=619&height=676"}
        alt="publication"
        className="w-full object-cover"
      />:<></>
      }{
        video?<video controls src={video} width="640" height="480"></video>:<></>
      }
      {
        event?<h3 className="font-semibold text-3xl">{eventParsed}</h3>:<></>
      }
      <div className="flex w-full p-3 justify-between">
        <div className="flex items-center gap-2">
          <h3>{likes}</h3>
        <i className="fas fa-thumbs-up bg-blue-400 text-white w-8 h-8 flex justify-center items-center  rounded-full"></i>
        </div>
        <h3>14 comentarios</h3>
      </div>
      <div className="flex justify-around w-full p-3 ">
        <button onClick={handleLike} className="flex justify-center items-center gap-3 hover:bg-purple-400 hover:rounded-md w-full h-10">
          <i className="fas fa-thumbs-up font-semibold"></i>
          <h3 className="hidden lg:block">Recomendar</h3>
        </button>
        <button onClick={handleNavigate} className="flex justify-center items-center gap-3 hover:bg-purple-400 hover:rounded-md w-full h-10">
          <i className="far fa-comment-dots font-semibold"></i>
          <h3 className="hidden lg:block">Comentar</h3>
        </button>
        <button onClick={handleShare} className="flex justify-center items-center gap-3 hover:bg-purple-400 hover:rounded-md w-full h-10">
          <i className="far fa-share-square font-semibold"></i>
          <h3 className="hidden lg:block">Compartir</h3>
        </button>
        <button className="flex justify-center items-center gap-3 hover:bg-purple-400 hover:rounded-md w-full h-10">
          <i className="fas fa-paper-plane font-semibold"></i>
          <h3 className="hidden lg:block">Enviar</h3>
        </button>
      </div>
    </div>
  );
};
