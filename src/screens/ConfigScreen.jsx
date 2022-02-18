import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { handleTheme } from "../actions/ui";
import { Layout } from "../components/Layout/Layout";
import { Navbar } from "../components/Navbar/Navbar";

export const ConfigScreen = () => {
    const dispatch=useDispatch();
    const {theme}=useSelector(state=>state.ui)
    // const [localTheme, setLocalTheme] = useState('')
    const changeTheme=(theme='')=>{
        dispatch(handleTheme(theme))
    }
  return (
    // <div className="w-full min-h-screen bg-blue-700">
    <Layout>
      <Navbar />
      <div className="w-full h-full flex flex-col items-center mt-5">

        <div className={`max-w-4xl w-full h-auto rounded-xl bg-skin-button-muted ${theme} shadow-xl`}>
            <h3 className="my-3 text-white text-xl font-semibold">Preferencias de Usuario</h3>
            <div className="w-full flex justify-around">
                <h3 className="text-white font-semibold">Elija su color {theme?theme:'theme-blue'} </h3>
                <div className="flex gap-3">
                    <button onClick={()=>changeTheme('blue')} className="w-10 h-10 bg-blue-500 rounded-full">
                    </button>
                    <button onClick={()=>changeTheme('green')} className="w-10 h-10 bg-green-500 rounded-full">
                    </button>
                    <button onClick={()=>changeTheme('red')} className="w-10 h-10 bg-red-600 rounded-full">
                    </button>
                    <button onClick={()=>changeTheme('purple')} className="w-10 h-10 bg-purple-500 rounded-full">
                    </button>
                    <button onClick={()=>changeTheme('dark')} className="w-10 h-10 bg-gray-500 rounded-full">
                    </button>
                </div>
            </div>
            <div className="w-full flex justify-around my-5">
                <h3 className="text-white font-semibold">Elija su Idioma </h3>
                <div className="flex gap-3">
                    <select name="" id="">
                        <option value="es">Epañol</option>
                        <option value="us">Inglés</option>
                        <option value="fs">Francés</option>
                    </select>
                </div>
            </div>
            
        </div>
      </div>
      </Layout>
    // </div>
  );
};
