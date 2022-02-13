import React from "react";
import { Routes, Route } from "react-router-dom";
import { JoinScreen } from "../screens/JoinScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";

export const DashboardPrivate = () => {
  return (
    <>
      <div className="">
        <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/join" element={<JoinScreen />} />
        </Routes>
      </div>
    </>
  );
};
