import React from "react";
import { useSelector } from "react-redux";

export const LateralProfile = () => {
  const { name, photoUrl } = useSelector((state) => state.auth);
  return (
    <div className="hidden lg:flex flex-col justify-start items-center col-start-1 col-end-4 gap-2 w-full">
      <div className="flex flex-col justify-between items-center rounded-lg bg-blue-300 w-4/5 h-4.5 relative z-0 overflow-hidden text-white">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/77/364/1022/anime-girls-anime-profile-face-wallpaper-preview.jpg"
          alt="bg-avatar"
          className="absolute w-full rounded-t-md h-20 object-cover"
        />
        <div className="flex flex-col justify-center items-center z-20 pt-5">
          <img
            src={photoUrl?photoUrl:"https://lh3.googleusercontent.com/a-/AOh14GghgGFNpFi0aYhaT6OmYZGuFYe9S_dJDf8EugOf=s288-p-rw-no"}
            alt="profile"
            className="rounded-full h-20 w-20"
          />
          <h3 className="font-semibold">{name?name:'Romel alexis carrasco mallma'}</h3>
          <span className="text-sm">Estudiante en Untels</span>
        </div>
        <div className="text-left w-full grid grid-cols-2 border-t border-white p-5 z-20">
          <h3>Contactos</h3>
          <h3 className="font-semibold col-start-1">Amplia tu red</h3>
          <h3 className="col-start-2 col-end-3 row-start-1 row-end-3 flex items-center justify-center font-semibold">
            2
          </h3>
        </div>
        <div className="text-left w-full border-t border-b border-white p-5">
          <h3>Accede a informacióny herramientas exclusivas</h3>
          <div className="flex items-center gap-2">
            <i className="far fa-square"></i>
            <h3 className="font-semibold">Probar Prmiun gratis</h3>
          </div>
        </div>
        <div className="text-left w-full p-5 flex items-center gap-2">
          <i className="far fa-bookmark"></i>
          <h3 className="font-semibold">Marcapáginas</h3>
        </div>
      </div>
      <div className="flex flex-col justify-around items-center rounded-md bg-blue-300 w-4/5 h-96 p-3 text-white">
        <div className="flex justify-between w-full ">
          <h3>Recientes</h3>
          <i className="fas fa-chevron-up"></i>
        </div>
        <h3 className="w-full text-left">
          <span className="font-bold">#</span> <span>covid 19</span>
        </h3>
        <h3 className="w-full text-left font-semibold">Grupos</h3>
        <div className="flex justify-between w-full">
          <h3 className="text-left font-semibold">Eventos</h3>
          <i className="fas fa-plus"></i>
        </div>
        <h3 className="w-full text-left font-semibold">Hastags Seguidos</h3>
        <h3 className="w-full text-left"><span className="font-bold">#</span> covid19</h3>
        <h3 className="w-full text-left">Ver todo</h3>
        <div className="w-full">
        <hr className="w-full h-px bg-white "/>
        <button className="font-semibold text-lg w-full bg-blue-500 rounded-md p-2 mt-2">Ver más</button>
        </div>
      </div>
    </div>
  );
};
