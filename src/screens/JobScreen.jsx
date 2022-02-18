import React from "react";
import { useSelector } from "react-redux";
import { Jobs } from "../components/Jobs/Jobs";
import { Layout } from "../components/Layout/Layout";
import { Navbar } from "../components/Navbar/Navbar";

export const JobScreen = () => {
  const {theme}=useSelector(state=>state.ui)
  return (
    <div>
      <Navbar />
      <Layout>
        <div className="lg:flex lg:justify-center lg:flex-row lg:items-start flex flex-col items-center mx-5 text-white gap-3">
          <Jobs />

          <div className="col-start-4 col-end-9 lg:w-networks h-full">
            <div className={`w-full h-fit  my-4 rounded-lg flex flex-col items-start p-3 bg-skin-text-inverted ${theme}`}>
              <div className="w-full flex justify-between">
                <h3 className="text-white font-semibold">
                  Ninguna invitación pendiente
                </h3>
                <button>Borrar</button>
              </div>
              <div className="w-full h-fit text-left">
                <h3 className="font-semibold">
                  React jobs{" "}
                  <span className="font-normal text-green-300">
                    (Nuevos 25)
                  </span>
                </h3>
                <h4 className="text-sm">Perú</h4>
              </div>
              <div className="w-full h-fit text-left pt-2 border-t ">
                <h3 className="font-semibold">
                  React jobs{" "}
                  <span className="font-normal text-green-300">
                    (Nuevos 25)
                  </span>
                </h3>
                <h4 className="text-sm">Perú</h4>
              </div>
              <div className="w-full h-fit text-left pt-2 border-t ">
                <h3 className="font-semibold">
                  React jobs{" "}
                  <span className="font-normal text-green-300">
                    (Nuevos 25)
                  </span>
                </h3>
                <h4 className="text-sm">Perú</h4>
              </div>
            </div>

            <div className={`w-full h-fit rounded-lg flex flex-col items-start p-3 bg-skin-text-inverted ${theme}`}>
              <div className="w-full flex justify-between">
                <h3 className="text-white font-semibold flex flex-col text-left">
                  Oportunidades en remoto
                  <span className="text-sm font-thin">
                    Porque has demostrado interes en empleos en remoto
                  </span>
                </h3>
                <button>Borrar</button>
              </div>
              <div className="w-full h-fit flex p-2">
                <img
                  className="h-16 w-16 rounded-md"
                  src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/20/20cab307ebf57b54d7eb181ceaf55d8c7a9cf71f.jpg"
                  alt="avatar"
                />
                <div className="flex justify-between flex-1 pl-2">
                  <h3 className="font-semibold flex flex-col">
                    Practicante de TI (part time)
                    <span className="font-normal">WI eSATE</span>
                    <span>Lima, Perú(En remoto)</span>
                    <span>En busca de personal</span>
                    <span>
                      Hace 1 día *{" "}
                      <span className="font-normal text-green-300">
                        (Nuevos 25)
                      </span>
                    </span>
                  </h3>
                  <i className="far fa-bookmark"></i>
                </div>
              </div>
              <div className="w-full h-fit flex p-2 border-t">
                <img
                  className="h-16 w-16 rounded-md"
                  src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/20/20cab307ebf57b54d7eb181ceaf55d8c7a9cf71f.jpg"
                  alt="avatar"
                />
                <div className="flex justify-between flex-1 pl-2">
                  <h3 className="font-semibold flex flex-col">
                    Practicante de TI (part time)
                    <span className="font-normal">WI eSATE</span>
                    <span>Lima, Perú(En remoto)</span>
                    <span>En busca de personal</span>
                    <span>
                      Hace 1 día *{" "}
                      <span className="font-normal text-green-300">
                        (Nuevos 25)
                      </span>
                    </span>
                  </h3>
                  <i className="far fa-bookmark"></i>
                </div>
              </div>
              <div className="w-full h-fit flex p-2 border-t">
                <img
                  className="h-16 w-16 rounded-md"
                  src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/20/20cab307ebf57b54d7eb181ceaf55d8c7a9cf71f.jpg"
                  alt="avatar"
                />
                <div className="flex justify-between flex-1 pl-2">
                  <h3 className="font-semibold flex flex-col">
                    Practicante de TI (part time)
                    <span className="font-normal">WI eSATE</span>
                    <span>Lima, Perú(En remoto)</span>
                    <span>En busca de personal</span>
                    <span>
                      Hace 1 día *{" "}
                      <span className="font-normal text-green-300">
                        (Nuevos 25)
                      </span>
                    </span>
                  </h3>
                  <i className="far fa-bookmark"></i>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-start-9 col-end-12 flex justify-end mx-auto lg:mx-0">
            <div className="w-80 h-fit my-4 bg-blue-300 rounded-lg flex flex-col items-center p-3">
              <h3 className="">Actualización de Empleo</h3>
            </div>
          </div> */}
        </div>
      </Layout>
    </div>
  );
};
