import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login, LoginWithGoogle } from "../actions/auth";
import { NavbarAuth } from "../components/NavbarAuth/NavbarAuth";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    // dispatch(login('1412125','romel','htpp://google.com'))
    dispatch(LoginWithGoogle())
    // console.log('hola');
  }
  const handleGoogleLogin=()=>{
    dispatch(LoginWithGoogle())
  }
  return (
    <div className="w-full h-screen bg-white p-3">
      <NavbarAuth/>
      <div className="lg:grid lg:grid-cols-2 lg:min-h-full flex flex-col items-center">
        <h3 className="lg:text-left lg:text-5xl mt-10 mb-5 text-blue-600 font-semibold text-lg ">Bienvenido a tú comunidad profesional</h3>
        <img className="lg:rounded-t object-cover h-96 w-96 rounded-full lg:m-auto" src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/06/linkedin-rebrand-760x400.png" alt="linkedin" />
        <button onClick={handleLogin} className="max-w-md w-full flex justify-center gap-2 mt-3 p-3 border-2 shadow-md rounded-3xl hover:bg-blue-600 hover:text-white">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google button"
          />
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
};
