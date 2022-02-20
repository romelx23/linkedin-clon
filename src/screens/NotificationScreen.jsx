import React from "react";
import { useSelector } from "react-redux";
import { CardNotification } from "../components/CardNotification/CardNotification";
import { Layout } from "../components/Layout/Layout";
import { Navbar } from "../components/Navbar/Navbar";
import { useFriends, useRecibedEmails, useRequestSend } from "../hooks/useSearchUser";

export const NotificationScreen = () => {
  const {uid}=useSelector(state=>state.auth)
  const {users}=useRequestSend(uid);
  const {users:usersRecived}=useRecibedEmails(uid);
  const {users:usersFriends}=useFriends(uid);

  
  return (
    <div>
      <Navbar />
      <Layout>
        {/* <div className="bg-blue-700 min-h-screen pt-3"> */}
        <div className="lg:flex lg:justify-center lg:items-start lg:flex-row flex flex-col items-center gap-2 text-white pt-3">
          <div className="hidden w-64 h-56 mr-5 bg-blue-700 rounded-md lg:flex flex-col justify-between">
            <h3 className="font-semibold py-2">Notificaciones</h3>
            <h3>Tienes nuevas notificaciones</h3>
            <div className="bg-blue-400 py-4 rounded-b-md">
              <h3>Mejora tus notificaciones</h3>
              <button className="text-blue-600 font-semibold">
                Ver Configuración
              </button>
            </div>
          </div>
          <div className="w-3/4 lg:w-notification  h-3/4 bg-blue-300 rounded-md">
            {
              users.map(el=>{
                return <CardNotification key={el.id} item={el} type={"solicitud"}/>
              })
            }
            {
              usersRecived.map(el=>{
                return <CardNotification key={el.id} item={el} type={"recibido"}/>
              })
            }
            {
              usersFriends.map(el=>{
                return <CardNotification key={el.id} item={el} type={"aceptada"}/>
              })
            }
          </div>
        </div>
      </Layout>
      {/* </div> */}
    </div>
  );
};
