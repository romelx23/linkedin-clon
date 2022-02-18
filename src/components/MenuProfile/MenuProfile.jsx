import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleLogOut } from "../../actions/auth";

export const MenuProfile = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {toggleOn} =useSelector(state=>state.toggle);
  const {theme}=useSelector(state=>state.ui)
  const { name, photoUrl } = useSelector((state) => state.auth);
  const handleOut=()=>{
    console.log('hola');
    dispatch(handleLogOut());
}
  const handleProfile=()=>{
    navigate('/profile');
  }
  const handleConfig=()=>{
    navigate('/home/config')
  }
  return (
    <div className={`${toggleOn? 'block':'hidden'} w-64 h-fit absolute z-40 right-0 flex flex-col gap-2 mt-3 mr-3 bg-skin-button-muted ${theme} text-white text-left p-3 rounded-lg top-72 lg:top-auto border`}>
      <div className="flex">
        <img
          src={photoUrl?photoUrl:"https://lh3.googleusercontent.com/a-/AOh14GghgGFNpFi0aYhaT6OmYZGuFYe9S_dJDf8EugOf=s288-p-rw-no"}
          alt="avatar"
          className="rounded-full w-16 h-16 mt-3 ml-3"
        />
        <div className="pl-2">
          <h2 className="text-white font-semibold">{name?name:"Nombre"}</h2>
          <h3>Esudiante en Untels</h3>
        </div>
      </div>
      <button onClick={handleProfile} className=" border border-white rounded-md hover:bg-blue-300">Ver perfil</button>
      <div className=" border-t border-b py-2">
        <Link to="/home/update-profile" className="hover:bg-blue-400 rounded-md w-full block">Cuenta</Link>
        <Link to="/home/config" className="hover:bg-blue-400 rounded-md w-full block">Configuración y privacidad</Link>
        <Link to="/home/help" className="hover:bg-blue-400 rounded-md w-full block">Ayuda</Link>
        <h3 className="hover:bg-blue-400 rounded-md">Idioma</h3>
      </div>
      <div className="py-2">
        <h3>Gestionar</h3>
        <h3>Publicaciones y actividades</h3>
        <h3>Cuenta de anuncios de empleo</h3>
      </div>
      <button onClick={handleOut} className="rounded-md hover:bg-blue-300">Cerrar sesión</button>
    </div>
  );
};
