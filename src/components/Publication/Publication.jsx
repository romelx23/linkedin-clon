import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { usePost } from "../../hooks/usePost";
import { CardPublication } from "../CardPublication/CardPublication";

export const Publication = ({ toggle, handleShow }) => {
  // const {posts}=useSelector(state=>state.post)
  const { photoUrl } = useSelector((state) => state.auth);
  const { posts } = usePost();

  // console.log(posts)
  // const handleItem=async()=>{
  //   const postsitem=await loadPosts()
  // console.log(postsitem);
  // }

  return (
    <div className="flex flex-col justify-start items-center col-start-4 col-end-9 h-fit p-3 gap-2 text-white my-5 lg:m-0 ">
      <div className="w-full max-w-3xl lg:w-full rounded-md h-36 lg:h-32 bg-purple-500">
        <div className="flex">
          <img
            src={
              photoUrl
                ? photoUrl
                : "https://lh3.googleusercontent.com/a-/AOh14GghgGFNpFi0aYhaT6OmYZGuFYe9S_dJDf8EugOf=s288-p-rw-no"
            }
            alt="avatar"
            className="rounded-full w-16 h-16 mt-3 ml-3"
          />
          <button
            onClick={toggle}
            className="flex-1 bg-purple-300 m-3 rounded-lg"
          >
            Crear una Publicación
          </button>
        </div>
        <div className="flex justify-around m-3">
          <button
            onClick={() => handleShow("image")}
            className="flex gap-3 items-center hover:bg-purple-400 rounded-md py-1 px-1.5 transition"
          >
            <i className="far fa-image text-blue-300"></i>
            Fotos
          </button>
          <button
            onClick={() => handleShow("video")}
            className="flex gap-3 items-center hover:bg-purple-400 rounded-md py-1 px-1.5 transition"
          >
            <i className="fab fa-youtube text-green-300"></i>
            Video
          </button>
          <button
            onClick={() => handleShow("event")}
            className="flex gap-3 items-center hover:bg-purple-400 rounded-md py-1 px-1.5 transition"
          >
            <i className="far fa-calendar-alt text-orange-300"></i>
            Eventos
          </button>
          <button className="flex gap-3 items-center hover:bg-purple-400 rounded-md py-1 px-1.5 transition">
            <i className="far fa-newspaper text-pink-300"></i>
            Escribir Artículo
          </button>
        </div>
      </div>
      {/* <div className="bg-purple-500 flex justify-center items-center h-20 border border-white">
        <h2>Publicaciones</h2>
      </div> */}
      {posts.length !== 0 ? (
        posts.map((el) => {
          const key = Math.random().toString(36).slice(2);
          return <CardPublication key={key} item={el} />;
        })
      ) : (
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="text-white font-semibold text-2xl">
            Cargando publicaciones...
          </h3>
          <div className="w-10 h-10 border-4 border-l-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      {/* <CardPublication/> */}
    </div>
  );
};
