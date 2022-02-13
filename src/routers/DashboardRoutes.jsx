import React from "react";
import { Routes, Route } from "react-router-dom";
import { ComentsScreen } from "../screens/ComentsScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { JobScreen } from "../screens/JobScreen";
import { MessageScreen } from "../screens/MessageScreen";
import { NetworkScreen } from "../screens/NetworkScreen";
import { NotificationScreen } from "../screens/NotificationScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <div className="">
        <Routes>
          {/* <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/hero/:heroId" element={<HeroScreen />} />
          <Route path="/dc" element={<DcScreen />} />
          <Route path="/search" element={<SearchScreen />} /> */}
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/home/coments/:id" element={<ComentsScreen />} />
          <Route path="/mis-redes" element={<NetworkScreen />} />
          <Route path="/empleos" element={<JobScreen />} />
          <Route path="/mensajes" element={<MessageScreen />} />
          <Route path="/notificaciones" element={<NotificationScreen />} />

          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </>
  );
};
