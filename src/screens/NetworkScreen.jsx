import React from "react";
import { useSelector } from "react-redux";
import { CardUser } from "../components/CardUser/CardUser";
import { Layout } from "../components/Layout/Layout";
import { Navbar } from "../components/Navbar/Navbar";
import { Networks } from "../components/Networks/Networks";
import { useSearchUser } from "../hooks/useSearchUser";

export const NetworkScreen = () => {
  const {users}=useSearchUser();
  const {theme}=useSelector(state=>state.ui)
  return (
    <div>
      <Navbar />
      <Layout>
        <div className="lg:flex-row lg:justify-center lg:items-start flex flex-col items-center text-white pt-3 px-3">
          <Networks />
          <div className="lg:col-start-5 lg:col-end-11 lg:mt-0 lg:p-0 lg:w-networks mt-4 h-full">
            <div className={`w-full h-14 lg:mx-2 rounded-lg flex items-center p-3 bg-skin-text-inverted ${theme}`}>
              <h3 className="text-white">Ninguna invitación pendiente</h3>
            </div>
            <div className={`w-full h-fit lg:m-2 my-4 rounded-lg flex flex-col items-start p-3 bg-skin-text-inverted ${theme}`}>
              <div className="">
                <img src="" alt="agenda" />
                <h3 className="text-white">Ninguna invitación pendiente</h3>
              </div>
              <h3>
                Importaremos y guardemos tus contactos de forma periódica para
                ayudarte a conectar con otras personas. Tú eliges con quién
                conectar y a quien invitar. <span>Más Información</span>
              </h3>
              <input type="text" placeholder="Ingrese su correo" className="w-full p-3 my-1 rounded-lg text-black" />
              <button>continuar</button>
              <button>Más opciones</button>
            </div>
            <div className={`w-full h-fit lg:m-2 my-4 rounded-lg grid grid-cols-simple place-items-center gap-2 p-2 bg-skin-text-inverted ${theme}`}>
              {
                users.map(user=>(
                  <CardUser key={user.id} user={user}/>
                ))
              }
            </div>
          </div>
        </div>
        </Layout>
    </div>
  );
};
