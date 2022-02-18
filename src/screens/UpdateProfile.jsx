import React from "react";
import { useSelector } from "react-redux";
import { Layout } from "../components/Layout/Layout";
import { Navbar } from "../components/Navbar/Navbar";

export const UpdateProfile = () => {
  const { name, photoUrl } = useSelector((state) => state.auth);
  return (
    <Layout>
      <Navbar />
      <div>
        <h3 className="font-semibold text-2xl text-white">Actualice su perfil</h3>
      </div>
      {/* styles for update profile tailwind */}
      <div className="w-full mt-5 flex justify-center items-center">
        <div className="w-96 h-96 rounded-2xl flex flex-col bg-purple-400 p-5 gap-5">
          <div className="rounded-full flex justify-center">
            <img
              src={photoUrl}
              alt="avatar"
              className="rounded-full w-32 h-32 object-cover hover:cursor-pointer hover:opacity-75 transition"
            />
          </div>
          <div className="pl-2">
            <h2 className="text-white font-semibold text-2xl">Ingrese su nuevo nombre</h2>
            <input type="text" name="" id="" value={name} placeholder="ingrese su nombre" className="w-full rounded-lg p-3 mt-3" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
