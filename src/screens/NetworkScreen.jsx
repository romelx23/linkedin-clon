import React from "react";
import { CardUser } from "../components/CardUser/CardUser";
import { Navbar } from "../components/Navbar/Navbar";
import { Networks } from "../components/Networks/Networks";

export const NetworkScreen = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-blue-700 min-h-screen text-white pt-3">
        <div className="lg:flex-row lg:justify-center lg:items-start flex flex-col items-center">
          <Networks />
          <div className="lg:col-start-5 lg:col-end-11 lg:mt-0 lg:p-0 lg:w-networks mt-2 p-2 h-full">
            <div className="w-full h-14 lg:mx-2 bg-blue-300 rounded-lg flex items-center p-3">
              <h3 className="text-white">Ninguna invitación pendiente</h3>
            </div>
            <div className="w-full h-fit lg:m-2 my-4 bg-blue-300 rounded-lg flex flex-col items-start p-3">
              <div className="">
                <img src="" alt="agenda" />
                <h3 className="text-white">Ninguna invitación pendiente</h3>
              </div>
              <h3>
                Importaremos y guardemos tus contactos de forma periódica para
                ayudarte a conectar con otras personas. Tú eliges con quién
                conectar y a quien invitar. <span>Más Información</span>
              </h3>
              <input type="text" placeholder="Ingrese su correo" />
              <button>continuar</button>
              <button>Más opciones</button>
            </div>
            <div className="w-full h-fit lg:m-2 my-4 bg-blue-300 rounded-lg grid grid-cols-simple place-items-center gap-2 p-2">
              <CardUser/>
              <CardUser/>
              <CardUser/>
              <CardUser/>
              <CardUser/>
              <CardUser/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
