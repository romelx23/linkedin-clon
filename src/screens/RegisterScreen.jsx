import React from "react";
import { NavbarAuth } from "../components/NavbarAuth/NavbarAuth";

export const RegisterScreen = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div className="w-full h-screen bg-gray-400 p-3">
      <NavbarAuth />
      <div className="flex h-4/5 mt-10 justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 bg-white p-5 rounded-2xl">
            <h3 className="text-blue-600 font-semibold text-lg ">
              Bienvenido a tú comunidad profesional
            </h3>
            <img
              className="rounded-full object-cover h-96 w-96 lg:m-auto"
              src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/06/linkedin-rebrand-760x400.png"
              alt="linkedin"
            />
            <div className="flex flex-col gap-2">
              <input
                type="text"
                className="max-w-md w-full p-3 border-2 shadow-md rounded-3xl"
                placeholder="Nombre de Usuario"
              />
              <input
                type="email"
                className="max-w-md w-full p-3 border-2 shadow-md rounded-3xl"
                placeholder="Email"
              />
              <input
                type="password"
                className="max-w-md w-full p-3 border-2 shadow-md rounded-3xl"
                placeholder="Contraseña"
              />
              <input
                type="password"
                className="max-w-md w-full p-3 border-2 shadow-md rounded-3xl"
                placeholder="Confirmar contraseña"
              />
            </div>
            <button className="max-w-md w-full flex justify-center gap-2 mt-3 p-3 border-2 shadow-md rounded-3xl hover:bg-blue-600 hover:text-white">
              Registrarme
            </button>
            <button className="max-w-md w-full flex justify-center gap-2 mt-3 p-3 border-2 shadow-md rounded-3xl hover:bg-blue-600 hover:text-white">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
              Registrarme con Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
