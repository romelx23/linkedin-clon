import React from "react";
import { useSelector } from "react-redux";
import { Layout } from "../components/Layout/Layout";
import { Navbar } from "../components/Navbar/Navbar";

export const HelpScreen = () => {
  const {theme}=useSelector(state=>state.ui)
  return (
    <Layout>
      <Navbar />
        <div className="w-full flex flex-col lg:flex-row h-screen">
          <div className={`w-full lg:w-2/5 h-auto text-left pl-20 flex flex-col gap-3 py-3 bg-skin-fill ${theme}`}>
            <h3 className="font-semibold text-2xl text-white mt-3">
              Encuentre su pregunta
            </h3>
            <p className="text-gray-100">
              Tipo de pregunta o problema que tiene
            </p>
            <input
              type="text"
              placeholder="Inicie su busqueda..."
              className="w-4/5 p-2 px-3 rounded-lg"
            />
            <div className="mt-24 mb-3 flex flex-col gap-1">
              <button className={`buttonQuest bg-skin-button-muted hover:bg-skin-text-inverted ${theme}`}>
                ¿Qué es la plataforma?
              </button>
              <button className={`buttonQuest bg-skin-button-muted hover:bg-skin-text-inverted ${theme}`}>
                ¿Qué es la plataforma?
              </button>
              <button className={`buttonQuest bg-skin-button-muted hover:bg-skin-text-inverted ${theme}`}>
                ¿Qué es la plataforma?
              </button>
              <button className={`buttonQuest bg-skin-button-muted hover:bg-skin-text-inverted text-inve ${theme}`}>
                ¿Qué es la plataforma?
              </button>
            </div>
            <div className={`w-4/5 h-48 rounded-lg text-white p-3 bg-skin-button-muted ${theme}`}>
                  <h3 className="font-semibold">Necsitas Ayuda</h3>
                  <button className={`my-3 py-3 text-center w-full rounded-lg bg-skin-fill hover:bg-skin-text-inverted ${theme}`}>Contacte con Nosotros whatsApp</button>
                  <button className={`py-3 text-center w-full rounded-lg bg-skin-fill hover:bg-skin-text-inverted ${theme}`}>Contacte con Nosotros Gmail</button>
              </div>
          </div>
          <div className={`w-full lg:w-2/3 h-full bg-pink-300 py-5 bg-skin-text-inverted ${theme}`}>
            <h3 className="font-semibold text-2xl text-white">
              Preguntas Frecuentes
            </h3>
            <div className="w-full text-left text-white text-xl">
              <h3 className="px-6 py-3">Preguntas</h3>
              <hr />
            </div>
            <div className="mt-3 p-6 flex flex-col gap-2">
              {/* icon more title */}
              <div className={`cardQuest bg-skin-button-muted hover:bg-skin-text-inverted ${theme}`}>
                <div className=" flex items-center gap-2 font-medium">
                  <i className="fas fa-question-circle"></i>
                  <h3>Primera pregunta</h3>
                </div>
                <p className="">
                  La plataforma es una herramienta que permite a los usuarios
                  interactuar con otros usuarios de forma directa, sin necesidad
                  de un intermediario. La plataforma permite a los usuarios
                  interactuar con otros usuarios de forma directa, sin necesidad
                  de un intermediario.
                </p>
              </div>
              <div className={`cardQuest bg-skin-button-muted hover:bg-skin-text-inverted ${theme}`}>
                <div className=" flex items-center gap-2 font-medium">
                  <i className="fas fa-question-circle"></i>
                  <h3>Primera pregunta</h3>
                </div>
                <p className="">
                  La plataforma es una herramienta que permite a los usuarios
                  interactuar con otros usuarios de forma directa, sin necesidad
                  de un intermediario. La plataforma permite a los usuarios
                  interactuar con otros usuarios de forma directa, sin necesidad
                  de un intermediario.
                </p>
              </div>
              <div className={`cardQuest bg-skin-button-muted hover:bg-skin-text-inverted ${theme}`}>
                <div className=" flex items-center gap-2 font-medium">
                  <i className="fas fa-question-circle"></i>
                  <h3>Primera pregunta</h3>
                </div>
                <p className="">
                  La plataforma es una herramienta que permite a los usuarios
                  interactuar con otros usuarios de forma directa, sin necesidad
                  de un intermediario. La plataforma permite a los usuarios
                  interactuar con otros usuarios de forma directa, sin necesidad
                  de un intermediario.
                </p>
              </div>
              <div className={`cardQuest bg-skin-button-muted hover:bg-skin-text-inverted ${theme}`}>
                <div className=" flex items-center gap-2 font-medium">
                  <i className="fas fa-question-circle"></i>
                  <h3>Primera pregunta</h3>
                </div>
                <p className="">
                  La plataforma es una herramienta que permite a los usuarios
                  interactuar con otros usuarios de forma directa, sin necesidad
                  de un intermediario. La plataforma permite a los usuarios
                  interactuar con otros usuarios de forma directa, sin necesidad
                  de un intermediario.
                </p>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
};
