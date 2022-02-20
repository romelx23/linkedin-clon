import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { setPost } from "../../actions/post";
import { uploadFiles, uploadVideosFiles } from "../../helpers/upaloadFiles";
import { useForm } from "../../hooks/useForm";

export const ModalUpload = ({ modal, toggle, show }) => {
  const [values, handleForm,reset] = useForm({
    image: "",
    video: "",
    url: "",
    title: "",
    event: "",
  });
  const { uid, name, photoUrl } = useSelector((state) => state.auth);
  const { title, event } = values;
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const mod = useRef(null);
  const handleToggle = (e) => {
    // console.log(e.target);
    if (e.target === mod.current) toggle();
  };
  // console.log(title, event);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    show.image && setPost(uid, name, photoUrl, "", url, "", "", 0);
    show.video && setPost(uid, name, photoUrl, "", "", url, "", 0);
    show.evento && setPost(uid, name, photoUrl,title,"","",event,0);
    console.log(values);
    reset();
    toggle();
    setUrl("");
  };

  const handleFileChange = async (e) => {
    console.log(e.target.files[0]);
    //validate type file
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
        // Swal.fire({
        //   title: "Archivo subido con exito",
        //   icon: "success",
        // });
      } else {
        Swal.fire({
          title: "Ingrese un tipo de archivo valido",
          icon: "success",
          text: "jpeg y png",
        });
      }
    }
  };
  const handleFileVideoChange = async (e) => {
    console.log(e.target.files[0]);
    //validate type video regex
    if (
      e.target.files[0].type === "video/mp4" ||
      e.target.files[0].type === "video/avi" ||
      e.target.files[0].type === "video/mov" ||
      e.target.files[0].type === "video/wmv"
    ) {
      const file = e.target.files[0];
      if (file) {
        setLoading(true);
        const fileUrl = await uploadVideosFiles(file);
        setUrl(fileUrl);
        setLoading(false);
        Swal.fire({
          title: "Archivo subido con exito",
          icon: "success",
        });
      }
    }
  };

  return (
    <>
      {modal ? (
        <div
          ref={mod}
          onClick={handleToggle}
          className="fixed top-0 w-full h-full bg-slate-400 bg-opacity-40 flex items-center justify-center"
        >
          <div className="w-full max-w-2xl h-auto bg-purple-500 rounded-xl flex flex-col gap-3 p-4 relative">
            <h1 className="text-white font-semibold text-xl">
              {show.evento ? "Ingrese su Evento" : "Ingrese su Archivo"}
            </h1>
            <button
              onClick={toggle}
              className="absolute right-4 text-white hover:text-purple-600 w-10 h-10 rounded-lg hover:bg-purple-300"
            >
              <i className="fas fa-times"></i>
            </button>
            <form onSubmit={handleSubmit}>
              {show.image ? (
                <>
                  {" "}
                  <h2 className="text-white font-semibold text-left">
                    Ingrese su Imagen
                  </h2>
                  <input
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    accept="image/*"
                    placeholder="Ingresar su Imagen"
                  />
                  <div className="flex justify-center py-4">
                    {url !== "" ? (
                      <img
                        src={url?url:null}
                        alt="preview"
                        className="w-auto h-56 bg-slate-300 rounded-lg object-cover"
                      />
                    ) : null}
                  </div>
                </>
              ) : (
                <></>
              )}
              {show.video ? (
                <>
                  <h2 className="text-white font-semibold text-left">
                    Ingrese su Video
                  </h2>
                  <input
                    type="file"
                    name="video"
                    onChange={handleFileVideoChange}
                    accept="video/*"
                    placeholder="Ingresar su Video"
                  />
                  <h3>O ingrese un link</h3>
                  <input
                    type="text"
                    name="url"
                    onChange={handleForm}
                    placeholder="Ingrese su link"
                    className="p-2 rounded-md"
                  />
                </>
              ) : (
                <></>
              )}
              {show.evento === true ? (
                <div className="flex flex-col gap-4">
                  <h2 className="text-white font-semibold text-left">
                    Ingrese Título de su Evento
                  </h2>
                  <input
                    type="text"
                    name="title"
                    onChange={handleForm}
                    id=""
                    placeholder="Titulo del evento"
                    className="p-2 rounded-md"
                  />
                  <h2 className="text-white font-semibold text-left">
                    Ingrese la fecha y hora del evento
                  </h2>
                  <input
                    type="datetime-local"
                    name="event"
                    id=""
                    onChange={handleForm}
                    className="p-2 rounded-md"
                  />
                </div>
              ) : (
                <></>
              )}
              <div className="flex justify-center pb-3">
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
              {show.evento ? (
                 <button
                 disabled={event !== "" && title !=="" ? false : true}
                 className={`${
                  event !== "" && title !==""  ? "cursor-pointer" : "cursor-not-allowed"
                 } bg-purple-300 text-white font-semibold p-4 rounded-lg hover:bg-purple-400`}
               >
                 Crear Evento
               </button>
              ) : (
                <button
                disabled={url !== "" ? false : true}
                className={`${
                  url !== "" ? "cursor-pointer" : "cursor-not-allowed"
                } bg-purple-300 text-white font-semibold p-4 rounded-lg hover:bg-purple-400`}
              >
                Subir Archivo
              </button>
              )}
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
