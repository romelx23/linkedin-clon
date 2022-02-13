import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { offToggle, onToggle } from "../../actions/toggle";
import { MenuProfile } from "../MenuProfile/MenuProfile";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { toggleOn } = useSelector((state) => state.toggle);
  const { name, photoUrl } = useSelector((state) => state.auth);
  const handleToggle = () => {
    if (!toggleOn) {
      dispatch(onToggle());
    }
    if (toggleOn) {
      dispatch(offToggle());
    }
  };
  return (
    <div div className="relative w-full">
      <div className="bg-blue-600 w-full h-14 flex justify-between px-5 text-white z-40">
        <div className="flex flex-row items-center">
          <h1 className="px-2 font-we">
            <i className="fab fa-linkedin-in"></i>
          </h1>
          <input
            type="text"
            placeholder="search"
            className="p-2 pl-7 rounded text-black"
          />
        </div>
        <div className="flex flex-wrap ">
          <div className="flex flex-col items-center absolute right-2 top-14 lg:flex-row lg:relative lg:top-0">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `navbar  ${
                  isActive ? "lg:bg-blue-300" : ""
                }`
              }
            >
              <span className="bg-red-600 block absolute w-3.5 h-3.5 rounded-full top-1 right-2 text-xs font-semibold">
                +1
              </span>
              <i className="fas fa-home"></i>
              <h3 className="hidden lg:block">Home</h3>
            </NavLink>
            <NavLink
              to="/mis-redes"
              className={({ isActive }) =>
                `navbar  ${
                  isActive ? "lg:bg-blue-300" : ""
                }`
              }
            >
              <span className="bg-red-600 block absolute w-3.5 h-3.5 rounded-full top-1 right-2 text-xs font-semibold">
                +1
              </span>
              <i className="fas fa-network-wired"></i>
              <h3 className="hidden lg:block">Mi Red</h3>
            </NavLink>
            <NavLink
              to="/empleos"
              className={({ isActive }) =>
                `navbar  ${
                  isActive ? "lg:bg-blue-300" : ""
                }`
              }
            >
              <span className="bg-red-600 block absolute w-3.5 h-3.5 rounded-full top-1 right-4 text-xs font-semibold">
                +1
              </span>
              <i className="fas fa-briefcase"></i>
              <h3 className="hidden lg:block">Empleos</h3>
            </NavLink>
            <NavLink
              to="/mensajes"
              className={({ isActive }) =>
                `navbar  ${
                  isActive ? "lg:bg-blue-300" : ""
                }`
              }
            >
              <span className="bg-red-600 block absolute w-3.5 h-3.5 rounded-full top-1 right-3 text-xs font-semibold">
                +1
              </span>
              <i className="far fa-comment-dots"></i>
              <h3 className="hidden lg:block">Mensajes</h3>
            </NavLink>
            <NavLink
              to="/notificaciones"
              className={({ isActive }) =>
                `navbar ${
                  isActive ? "lg:bg-blue-300" : ""
                }`
              }
            >
              <span className="bg-red-600 block absolute w-4 h-4 rounded-full top-1 right-8 text-xs font-semibold">
                +1
              </span>
              <i className="far fa-bell"></i>
              <h3 className="hidden lg:block">Notificaciones</h3>
            </NavLink>
            <div
              onClick={handleToggle}
              className={`${
                toggleOn ? "lg:bg-blue-300" : "bg-blue-600"
              } px-3 pt-1 hover:lg:bg-blue-300 hover:cursor-pointer relative h-14 w-20 flex flex-col items-center`}
            >
              <img
                src={photoUrl?photoUrl:"https://c4.wallpaperflare.com/wallpaper/77/364/1022/anime-girls-anime-profile-face-wallpaper-preview.jpg"}
                alt="bg-avatar"
                className={`${toggleOn?"scale-75 rounded-full":"w-6 h-6 rounded-full object-cover"} transition-transform delay-75`}
              />
              <h3 className="text-xs h-4.5 overflow-hidden text-ellipsis">
                {name?name:'Yo'} 
              </h3>
              <i className="fas fa-chevron-down text-sm hidden"></i>
            </div>
          </div>
          <div className="px-3 pt-1 hover:lg:bg-blue-300 hover:cursor-pointer">
            <i className="fas fa-bars"></i>
            <h3 className="hidden lg:block">Productos</h3>
          </div>
        </div>
      </div>
      <MenuProfile />
    </div>
  );
};
