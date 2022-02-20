import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { updateUser } from "../actions/auth";
import { Layout } from "../components/Layout/Layout";
import { Navbar } from "../components/Navbar/Navbar";
import { uploadFiles } from "../helpers/upaloadFiles";
import { useForm } from "../hooks/useForm";

export const UpdateProfile = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const { name, photoUrl } = useSelector((state) => state.auth);
  const [values, handleChange] = useForm({
    name: name,
    photoUrl: "",
  });
  const { name: nombre } = values;
  const handlePictureClick = () => {
    document.getElementById("fileSelector").click();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (url !== "") {
      dispatch(updateUser(nombre, url));
      console.log(nombre, url);
    } else {
      Swal.fire({
        title: "Debe seleccionar una foto",
        icon: "warning",
      });
    }
  };

  const handleFileChange = async (e) => {
    console.log(e.target.files[0]);
    if (
      e.target.files[0].type === "image/jpeg" ||
      e.target.files[0].type === "image/png"
    ) {
      const file = e.target.files[0];
      if (file) {
        setLoading(true);
        const fileUrl = await uploadFiles(file);
        setUrl(fileUrl);
        setLoading(false);
      } else {
        Swal.fire({
          title: "Ingrese un tipo de archivo valido",
          icon: "success",
          text: "jpeg y png",
        });
      }
    }
  };
  return (
    <Layout>
      <Navbar />
      <div>
        <h3 className="font-semibold text-2xl text-white">
          Actualice su perfil
        </h3>
      </div>
      {/* styles for update profile tailwind */}
      <div className="w-full mt-5 flex justify-center items-center">
        <div className="w-96 h-96 rounded-2xl flex flex-col bg-purple-400 p-5 gap-5">
          <form action="" onSubmit={handleSubmit}>
            <div className="rounded-full flex justify-center">
              <img
                onClick={handlePictureClick}
                src={photoUrl}
                alt="avatar"
                className="rounded-full w-32 h-32 object-cover hover:cursor-pointer hover:opacity-75 transition"
              />
              {loading ? (
                <div className="flex flex-col items-center">
                  <h2 className="font-semibold text-white">
                    Subiendo archivo...
                  </h2>
                  <div className="w-10 h-10 border-4 border-l-blue-500 rounded-full animate-spin"></div>
                </div>
              ) : (
                <></>
              )}
            </div>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              accept="image/*"
              placeholder="Ingresar su Imagen"
            />
            <div className="pl-2">
              <h2 className="text-white font-semibold text-2xl">
                Ingrese su nuevo nombre
              </h2>
              <input
                type="text"
                name="name"
                id=""
                value={values.name}
                onChange={handleChange}
                placeholder="ingrese su nombre"
                className="w-full rounded-lg p-3 mt-3"
              />
              <button className="bg-skin-button-muted w-full my-3 py-3 rounded-xl text-white font-semibold">
                Actualizar
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
