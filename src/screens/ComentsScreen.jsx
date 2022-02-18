import moment from "moment";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { CardPublication } from "../components/CardPublication/CardPublication";
import { Navbar } from "../components/Navbar/Navbar";
import { createComent, useGetComents } from "../hooks/useComents";
import { useForm } from "../hooks/useForm";
import { usePost } from "../hooks/usePost";

export const ComentsScreen = () => {
  const [values, handleChange,reset] = useForm({
    coment: "",
  });
  const { id } = useParams();
  const { coment: coments } = useGetComents(id);
  const {theme}=useSelector(state=>state.ui)
  // const { posts } = useSelector((state) => state.post);
  const {posts}=usePost();
  const postfilter = posts.filter((el) => el.id === id);
  const { name, photoUrl } = useSelector((state) => state.auth);
  //animation bounce
  const { coment } = values;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (coment === "") {
      Swal.fire({
        title: "Rellene el campo",
        icon: "warning",
      });
      return false;
    }
    createComent(coment, id, name, photoUrl);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Agrego un comentario",
      showConfirmButton: false,
      timer: 1500,
      backdrop: false,
    });
    reset();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`w-full min-h-screen flex flex-col items-center bg-skin-fill ${theme}`}>
      <Navbar />
      <div className="flex w-full justify-center gap-4 flex-col items-center lg:flex-row lg:items-stretch">
        {postfilter ? (
          <div className="max-w-xl w-full py-5 bounce">
            {postfilter ? (
              postfilter.map((el) => {
                return <CardPublication key={el.id} item={el} />;
              })
            ) : (
              <h1 className="font-semibold">No hay Publicación</h1>
            )}
          </div>
        ) : (
          <div className="w-10 h-10 border-4 border-l-blue-500 rounded-full animate-spin"></div>
        )}
        <div className="w-full max-w-xl my-5 rounded-lg bg-purple-600 px-5 flex flex-col-reverse justify-start">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="coment"
              onChange={handleChange}
              placeholder="Ingrese su Comentario"
              autoComplete="false"
              className="w-full mt-5 mb-3 p-3 rounded-lg outline-none border-2 border-transparent hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500"
            />
          </form>
          {coments.map((item) => {
            const key = Math.random().toString(36).slice(2);
            const fecha=item.date.seconds*1000;
            const fechaParsed=moment(fecha).locale('es').startOf('minutes').fromNow()
            return (
              <div key={key} className="w-full h-28  flex items-center">
                <img
                  src={
                    item
                      ? item.user_url
                      : "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/20/20cab307ebf57b54d7eb181ceaf55d8c7a9cf71f.jpg"
                  }
                  alt="avatar"
                  className="w-16 h-16 bg-gray-500 rounded-full"
                />
                <div className="flex flex-col items-start ml-3 bg-purple-500 w-full rounded-md p-3 text-gray-100 font-semibold">
                  <h3 className="font-semibold">{item.username}</h3>
                  <h3>{item.coment}</h3>
                  <h3 className="text-sm">{fechaParsed}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
