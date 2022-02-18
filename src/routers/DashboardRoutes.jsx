import React from "react";
import { Routes, Route } from "react-router-dom";
import { ComentsScreen } from "../screens/ComentsScreen";
import { ConfigScreen } from "../screens/ConfigScreen";
import { HelpScreen } from "../screens/HelpScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { JobScreen } from "../screens/JobScreen";
import { MessageScreen } from "../screens/MessageScreen";
import { NetworkScreen } from "../screens/NetworkScreen";
import { NotificationScreen } from "../screens/NotificationScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { UpdateProfile } from "../screens/UpdateProfile";
import { UserDetailScreen } from "../screens/UserDetailScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/home/coments/:id" element={<ComentsScreen />} />
          <Route path="/home/config" element={<ConfigScreen />} />
          <Route path="/home/help" element={<HelpScreen />} />
          <Route path="/home/update-profile" element={<UpdateProfile />} />
          <Route path="/mis-redes" element={<NetworkScreen />} />
          <Route path="/empleos" element={<JobScreen />} />
          <Route path="/mensajes" element={<MessageScreen />} />
          <Route path="/notificaciones" element={<NotificationScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/detail/profile/:id" element={<UserDetailScreen />} />

          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </>
  );
};
