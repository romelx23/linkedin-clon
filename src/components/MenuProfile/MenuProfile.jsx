import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { handleLogOut } from "../../actions/auth";

export const MenuProfile = () => {
  const dispatch=useDispatch();
  const {toggleOn} =useSelector(state=>state.toggle);
  const { name, photoUrl } = useSelector((state) => state.auth);
  const handleOut=()=>{
    console.log('hola');
    dispatch(handleLogOut());
}
  return (
    <div className={`${toggleOn? 'block':'hidden'} w-64 h-fit absolute z-30 right-0 flex flex-col gap-2 mt-3 mr-3 bg-blue-600 text-white text-left p-3 rounded-lg top-72 lg:top-auto`}>
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
      <button className=" border border-white rounded-md hover:bg-blue-300">Ver perfil</button>
      <div className=" border-t border-b py-2">
        <h3>Cuenta</h3>
        <h3>Configuración y privacidad</h3>
        <h3>Ayuda</h3>
        <h3>Idioma</h3>
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
