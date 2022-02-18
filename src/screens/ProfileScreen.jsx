import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { usePost } from "../hooks/usePost";

export const ProfileScreen = () => {
  const navigate=useNavigate();
  const { name, uid, photoUrl } = useSelector((state) => state.auth);
  const {theme}=useSelector(state=>state.ui)
  const { posts } = usePost();
  const privatePost = posts.filter((post) => post.uid === uid);
  const handleNavigate=(id)=>{
    navigate(`/home/coments/${id}`)
  }
  return (
    <div className={`w-full min-h-screen pb-5 bg-skin-fill ${theme}`}>
      <Navbar />
      {/* <div className="text-white">ProfileScreen</div> */}
      <div className="w-full mt-5 flex justify-center items-center">
        <div className="rounded-full">
          <img
            src={photoUrl}
            alt="avatar"
            className="rounded-full w-32 h-32 object-cover"
          />
        </div>
        <div className="pl-2">
          <h2 className="text-white font-semibold text-2xl">{name}</h2>
          <h3 className="text-white font-light text-lg">Esudiante en Untels</h3>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-2 mt-3">
        <button className="bg-purple-400 p-3 rounded-xl transition hover:bg-purple-600">
          <i className="fas fa-border-all text-3xl text-white"></i>
        </button>
        <button className="bg-purple-400 p-3 rounded-xl transition hover:bg-purple-600">
          <i className="far fa-bookmark text-3xl text-white "></i>
        </button>
      </div>
      <div className="w-full px-5">
        <div className="grid grid-cols-simple gap-5 place-items-center mt-5">
          {privatePost.length !== 0 ? (
            privatePost.map((el) => {
              return (
                <div key={el.id} onClick={()=>handleNavigate(el.id)} className="w-full hover:cursor-pointer">
                  <div className="h-60 bg-gradient-to-t from-indigo-400 to-sky-400 rounded-lg shadow-lg p-5 relative transition  hover:-translate-y-2">
                    <div className="flex flex-col z-30 absolute text-white">
                      <h2 className="text-2xl font-semibold">
                        {el.message || el.event}
                      </h2>
                      <p className="text-sm">{el.displayName}</p>
                    </div>
                    {el.img ? (
                      <img
                        src={el.img}
                        alt="publication"
                        className="w-full h-full absolute object-cover top-0 left-0 opacity-30"
                      />
                    ) : null}
                    {el.video ? (
                      <video
                        src={el.video}
                        alt="publication"
                        controls
                        className="w-full h-full"
                      />
                    ) : null}
                    {el.audio ? (
                      <audio
                        src={el.audio}
                        alt="publication"
                        className="w-20 h-20"
                      />
                    ) : null}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="w-full flex flex-col justify-center items-center">
              <h3 className="text-white font-semibold text-2xl">Cargando publicaciones...</h3>
              <div className="w-10 h-10 border-4 border-l-blue-500 rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
