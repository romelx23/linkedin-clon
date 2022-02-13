import React from "react";

export const CardMessage = () => {
  return (
    <div className="col-start-4 col-end-9 bg-blue-300 rounded-lg grid grid-cols-message text-white overflow-hidden">
      <div className=" flex flex-col bg-green-300">
        <div className="w-full py-2 px-3 flex justify-between">
          <h3>Mensajes</h3>
          <div className="flex gap-2">
            <i className="fas fa-ellipsis-h"></i>
            <i className="fas fa-edit"></i>
          </div>
        </div>
        <div className="w-full p-2">
          <input
            className="w-full p-2 rounded-md"
            type="text"
            placeholder="buscar mensaje"
          />
        </div>
        <div className="w-full h-full flex items-center justify-center ">
          <h3 className="font-semibold">No hay mensajes</h3>
        </div>
      </div>
      <div className="col-start-2 col-end-3 p-2 flex flex-col bg-purple-300">
        <div className="w-full font-semibold text-left ">
          <h3 className="border-b">Nuevos mensajes</h3>
        </div>
        <div className="w-full h-full flex flex-col justify-between">
          <input
            className="w-full mt-2 rounded-md p-2"
            type="text"
            placeholder="Escribe un o varios nombres"
          />
          <div className="">
            <input
              className="w-full h-44 mt-2 rounded-md p-2"
              type="text"
              placeholder="Escribe tu mensaje"
            />
            <div className="flex justify-between mt-2">
              <div className="flex justify-center items-center gap-2">
                <i className="far fa-image"></i>
                <i className="far fa-laugh-squint"></i>
              </div>
              <button className="px-3 py-2 bg-gray-300 rounded-lg">
                enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
