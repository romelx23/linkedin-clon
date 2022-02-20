import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { offMenu, offToggle, onToggle, showMenu } from "../../actions/toggle";
import { MenuProfile } from "../MenuProfile/MenuProfile";
import { SearchUsers } from "../SearchUsers/SearchUsers";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { toggleOn } = useSelector((state) => state.toggle);
  const { name, photoUrl } = useSelector((state) => state.auth);
  const {theme}=useSelector(state=>state.ui)
  const handleToggle = () => {
    if (!toggleOn) {
      dispatch(onToggle());
    }
    if (toggleOn) {
      dispatch(offToggle());
    }
  };
    const { menuOn } = useSelector((state) => state.toggle);
    const handleShow = () => {
        if (!menuOn) {
          dispatch(showMenu());
        }
        if (menuOn) {
          dispatch(offMenu());
        }
      };
  return (
    <div div className="relative w-full">
      <div className={`bg-blue-600 bg-skin-button-muted ${theme} w-full h-14 flex justify-between px-5 text-white z-40`}>
        <div className="flex flex-row items-center">
          <h1 className="px-2 font-we">
            <i className="fab fa-linkedin-in"></i>
          </h1>
          <SearchUsers/>
        </div>
        <div className="flex flex-wrap ">
          <div className={`${menuOn? 'scale-100':'scale-0'} flex flex-col items-center absolute right-2 top-14 lg:flex-row lg:relative lg:top-0 bg-blue-600 lg:bg-transparent origin-top transition lg:scale-100`}>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `navbar hover:bg-skin-fill ${theme}  ${
                  isActive ? `lg:bg-skin-fill ${theme}` : ""
                }`
              }
            >
              <span className="badge">
                +1
              </span>
              <i className="fas fa-home"></i>
              <h3 className="hidden lg:block">Home</h3>
            </NavLink>
            <NavLink
              to="/mis-redes"
              className={({ isActive }) =>
                `navbar hover:bg-skin-fill ${theme}  ${
                  isActive ? `lg:bg-skin-fill ${theme}` : ""
                }`
              }
            >
              <span className="badge">
                +1
              </span>
              <i className="fas fa-network-wired"></i>
              <h3 className="hidden lg:block">Mi Red</h3>
            </NavLink>
            <NavLink
              to="/empleos"
              className={({ isActive }) =>
                `navbar hover:bg-skin-fill ${theme} ${
                  isActive ? `lg:bg-skin-fill ${theme}` : ""
                }`
              }
            >
              <span className="badge">
                +1
              </span>
              <i className="fas fa-briefcase"></i>
              <h3 className="hidden lg:block">Empleos</h3>
            </NavLink>
            <NavLink
              to="/mensajes"
              className={({ isActive }) =>
                `navbar hover:bg-skin-fill ${theme}  ${
                  isActive ? `lg:bg-skin-fill ${theme}` : ""
                }`
              }
            >
              <span className="badge">
                +1
              </span>
              <i className="far fa-comment-dots"></i>
              <h3 className="hidden lg:block">Mensajes</h3>
            </NavLink>
            <NavLink
              to="/notificaciones"
              className={({ isActive }) =>
                `navbar hover:bg-skin-fill ${theme} ${
                  isActive ? `lg:bg-skin-fill ${theme}` : ""
                }`
              }
            >
              <span className="badge">
                +1
              </span>
              <i className="far fa-bell"></i>
              <h3 className="hidden lg:block">Notificaciones</h3>
            </NavLink>
            <div
              onClick={handleToggle}
              className={`${
                toggleOn ? "lg:bg-blue-300" : "bg-blue-600"
              } px-3 pt-1 hover:lg:bg-blue-300 hover:cursor-pointer relative h-14 w-20 flex flex-col items-center justify-center`}
            >
              <img
                src={photoUrl?photoUrl:"https://c4.wallpaperflare.com/wallpaper/77/364/1022/anime-girls-anime-profile-face-wallpaper-preview.jpg"}
                alt="bg-avatar"
                className={`${toggleOn?"scale-75 rounded-full h-16 w-16 object-cover":"w-7 h-7 rounded-full object-cover"} transition-transform delay-75`}
              />
              <h3 className="text-xs h-4.5 overflow-hidden text-ellipsis">
                {name?name:'Yo'} 
              </h3>
              <i className="fas fa-chevron-down text-sm hidden"></i>
            </div>
          </div>
          <div onClick={handleShow} className={`${menuOn?'bg-blue-400':'bg-transparent'} px-3 pt-1 hover:lg:bg-skin-fill ${theme} hover:cursor-pointer lg:bg-transparent`}>
            <i className="fas fa-bars"></i>
            <h3 className="hidden lg:block">Productos</h3>
          </div>
        </div>
      </div>
      <MenuProfile />
    </div>
  );
};
