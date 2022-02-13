import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { setPost } from "../../actions/post";
import { useForm } from "../../hooks/useForm";

export const Modal = ({ modal, toggle }) => {
  const mod = useRef(null);
  const handleToggle = (e) => {
    // console.log(e.target);
    // console.log(mod.current);
    if (e.target === mod.current) toggle();
  };
  // Configurar Hooks
  // Login Screen

  const [values, handleForm,reset] = useForm({
    publication: "",
  });
  const { name, uid, photoUrl } = useSelector((state) => state.auth);
  // console.log(values);

  const createPost = () => {
    const {publication} = values;
    if(publication===''){
      Swal.fire({
        title: 'Debe llenar el campo',
        icon:'warning'
      })
      return false;
    }
    setPost(uid, name, photoUrl,publication,'');
    Swal.fire({
      title: 'Publicado',
      icon:'success'
    })
    reset()
  };

  return modal ? (
    <div
      onClick={handleToggle}
      ref={mod}
      className="bg-gray-600 bg-opacity-80 text-white w-full h-full fixed top-0 flex justify-center items-center"
    >
      <div className="w-fit h-fit bg-blue-300 p-3 flex flex-col items-start rounded-md">
        <div className="flex justify-between border-b  mb-2 w-full">
          <h3 className="font-semibold">Crear Publicación</h3>
          <button onClick={toggle} className="hover:text-purple-300">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="flex m-2 w-full">
          <img
            src={
              photoUrl
                ? photoUrl
                : "https://c4.wallpaperflare.com/wallpaper/77/364/1022/anime-girls-anime-profile-face-wallpaper-preview.jpg"
            }
            alt="bg-avatar"
            className="w-20 h-20 rounded-full"
          />
          <div className="flex-1">
            <h3>{name}</h3>
            <button>Cualquier</button>
          </div>
        </div>
        {/* <form onSubmit={}> */}
          <textarea
            onChange={handleForm}
            name="publication"
            id="publication"
            placeholder="Ingrese su publicación"
            cols="30"
            rows="10"
            className="h-28 w-full rounded-md p-2 text-gray-600"
          ></textarea>
          <button className="font-semibold text-white mt-2 p-2 hover:bg-purple-400 rounded-lg">
            Añadir hastag
          </button>
          <div className="w-full flex justify-around items-center text-lg gap-1.5">
            <i className="far fa-image text-gray-50 hover:bg-purple-400 px-2 py-2 rounded-md"></i>
            <i className="fab fa-youtube hover:bg-purple-400 px-2 py-2 rounded-md"></i>
            <i className="far fa-file hover:bg-purple-400 px-2 py-2 rounded-md"></i>
            <i className="fas fa-suitcase hover:bg-purple-400 px-2 py-2 rounded-md"></i>
            <i className="fas fa-chart-bar hover:bg-purple-400 px-2 py-2 rounded-md"></i>
            <i className="fas fa-ellipsis-h hover:bg-purple-400 px-2 py-2 rounded-md"></i>
            <button className="flex items-center hover:bg-purple-400 px-2 py-2 rounded-md gap-1">
              <i className="far fa-comment-dots"></i>
              <h3>Cualquiera</h3>
            </button>
            <button
              onClick={createPost}
              className="hover:bg-purple-400 px-2 py-2 rounded-md"
            >
              Publicar
            </button>
          </div>
        {/* </form> */}
      </div>
    </div>
  ) : (
    <></>
  );
};
