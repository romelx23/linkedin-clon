import React from "react";
import { useSelector } from "react-redux";

export const Jobs = () => {
  const {theme}=useSelector(state=>state.ui)
  return (
    <div className={`col-start-1 col-end-4 h-fit flex flex-col gap-2 w-96 rounded-lg p-3 mt-4 mx-auto lg:mx-0 bg-skin-text-inverted ${theme}`}>
      <h3>Gestionar mi red</h3>
      <button className="flex justify-between">
        <div className="flex items-center gap-2">
        <i className="far fa-address-book"></i>
        <h3>Contactos</h3>
        </div>
        <h3>3</h3>
      </button>
      <button className="flex justify-between">
        <div className="flex items-center gap-2">
            <i className="far fa-address-card"></i>
            <h3>Contactos</h3>
        </div>
        <h3>120</h3>
      </button>
      <button className="flex justify-between">
        <div className="flex items-center gap-2">
            <i className="far fa-user-circle"></i>
            <h3>Gente que sigo</h3>
        </div>
      </button>
      <button className="flex justify-between">
        <div className="flex items-center gap-2">
            <i className="far fa-calendar-alt"></i>
            <h3>Eventos</h3>
        </div>
      </button>
      <button className="flex justify-between">
        <div className="flex items-center gap-2">
            <i className="fal fa-file-alt"></i>
            <h3>Páginas</h3>
        </div>
        <h3>9</h3>
      </button>
      <button className="flex justify-between">
        <div className="flex items-center gap-2">
            <i className="fas fa-newspaper"></i>
            <h3>Newletters</h3>
        </div>
      </button>
      <button className="flex justify-between">
        <div className="flex items-center gap-2">
            <i className="fas fa-hashtag"></i>
            <h3>Hashtag</h3>
        </div>
        <h3>1</h3>
      </button>
      <button className="flex justify-between">
        Mostart men gap-2os
        <i className="fas fa-angle-up"></i>
      </button>
      <div className="border"></div>
    </div>
  );
};
