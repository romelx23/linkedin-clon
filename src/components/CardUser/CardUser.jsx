import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { recivedRequestFriend, sendRequestFriend } from "../../actions/auth";
import { useRequestSend } from "../../hooks/useSearchUser";

export const CardUser = ({ user }) => {
  const dispatch = useDispatch();
  const { displayName, photoURL, id } = user;
  const { theme } = useSelector((state) => state.ui);
  const { uid,name, photoUrl } = useSelector((state) => state.auth);
  const {users:userSending}=useRequestSend(uid);
  const handleRequest = () => {
    console.log(id,displayName,photoURL, 'solicitud enviada');
    const userExisting=userSending.filter(el=>el.id===id);
    console.log(userSending.filter(el=>el.id===id));
    if(userExisting.length!==0){
      Swal.fire({
        title:'Ya se envió la solicitud',
        icon:'warning'
      })
      return false;
    }
    dispatch(sendRequestFriend(uid,displayName,photoURL,id));
    dispatch(recivedRequestFriend(id,name,photoUrl,uid))
  };
  return (
    <div className="flex flex-col w-60 h-64 justify-between items-center gap-2 shadow-md rounded-2xl">
      <div className="flex flex-col justify-between items-center rounded-lg w-full h-auto relative z-0 overflow-hidden text-white">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/77/364/1022/anime-girls-anime-profile-face-wallpaper-preview.jpg"
          alt="bg-avatar"
          className="absolute w-full rounded-t-md h-20 object-cover"
        />
        <div className="flex flex-col justify-center items-center z-20 pt-5">
          <img
            src={
              photoURL
                ? photoURL
                : "https://lh3.googleusercontent.com/a-/AOh14GghgGFNpFi0aYhaT6OmYZGuFYe9S_dJDf8EugOf=s288-p-rw-no"
            }
            alt="profile"
            className="rounded-full h-20 w-20"
          />
          <h3 className="font-semibold">{displayName}</h3>
          <span className="text-sm">Estudiante en Untels</span>
        </div>
      </div>
      <div className="flex flex-col py-2">
        <div className="flex">
          <img
            className="w-8 h-8"
            src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d6/d6f9f5e578519aa21b363abb5bf7b8d3edfbc960.jpg"
            alt="logo__corp"
          />
          <h3>Universidad Tecnologica de Lima Sur</h3>
        </div>
        <button
        onClick={handleRequest}
          className={`border border-white p-2 rounded-3xl hover:bg-skin-button-muted hover:shadow-sm hover:shadow-white  ${theme}`}
        >
          Conectar
        </button>
      </div>
    </div>
  );
};
