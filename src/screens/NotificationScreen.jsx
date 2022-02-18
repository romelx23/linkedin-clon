import React from "react";
import { CardNotification } from "../components/CardNotification/CardNotification";
import { Layout } from "../components/Layout/Layout";
import { Navbar } from "../components/Navbar/Navbar";

export const NotificationScreen = () => {
  return (
    <div>
      <Navbar />
      <Layout>
        {/* <div className="bg-blue-700 min-h-screen pt-3"> */}
        <div className="lg:flex lg:justify-center lg:items-start lg:flex-row flex flex-col items-center gap-2 text-white pt-3">
          <div className="w-64 h-56 mr-5 bg-blue-300 rounded-md flex flex-col justify-between">
            <h3 className="font-semibold py-2">Notificaciones</h3>
            <h3>Tienes nuevas notificaciones</h3>
            <div className="bg-gray-400 py-4 rounded-b-md">
              <h3>Mejora tus notificaciones</h3>
              <button className="text-blue-600 font-semibold">
                Ver Configuración
              </button>
            </div>
          </div>
          <div className="w-notification overflow-y-scroll h-3/4 bg-blue-300 rounded-md">
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
          </div>
        </div>
      </Layout>
      {/* </div> */}
    </div>
  );
};
