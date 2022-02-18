import React from 'react';
import { useSelector } from 'react-redux';

export const LateralBusiness = () => {
  const {theme}=useSelector(state=>state.ui)
  return <div className='col-start-9 col-end-12 hidden lg:flex justify-center'>
    <div className={`w-4/5 h-fit rounded-lg p-3 flex flex-col gap-2 bg-skin-text-inverted ${theme} text-white`}>
      <div className='flex justify-between items-center'>
        <h3>Añadir a tu feed</h3>
        <i className="fas fa-info text-xs w-4 h-4 flex justify-center items-center rounded-sm bg-gray-600 text-white"></i>
      </div>
      <div className="flex">
        <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/20/20cab307ebf57b54d7eb181ceaf55d8c7a9cf71f.jpg" alt="avatar" className='w-16 h-16 rounded-full'/>
        <div className=" flex flex-1 flex-col text-left px-2.5 ">
        <h3 className='font-semibold text-base'>Ministerio de Trabajo y Promoción del Empleo</h3>
        <span className='text-sm'>Empresa * Administración gubernamental</span>
        <button className='py-1.5 px-10 bg-blue-500 hover:bg-blue-700 w-2/4 flex items-center justify-center rounded-3xl gap-2 text-white'><i className="fas fa-plus"></i> Seguir</button>
        </div>
      </div>
      <div className="flex">
        <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/5d/5d97066281d98aa04deca2e41750c2b1932d6056.jpg" alt="avatar"  className='w-16 h-16 rounded-full' />
        <div className=" flex flex-1 flex-col text-left px-2.5">
        <h3 className='font-semibold text-base'>Ministerio de Trabajo y Promoción del Empleo</h3>
        <span className='text-sm'>Empresa * Administración gubernamental</span>
        <button className='py-1.5 px-10 bg-blue-500 hover:bg-blue-700 w-2/4 flex items-center justify-center rounded-3xl gap-2 text-white'><i className="fas fa-plus"></i> Seguir</button>
        </div>
      </div>
      <div className="flex">
        <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/dc/dcab9a817dc8e5cf6d19a56f8ccd3402ab25925e.jpg" alt="avatar"  className='w-16 h-16 rounded-full'/>
        <div className=" flex flex-1 flex-col text-left px-2.5">
        <h3 className='font-semibold text-base'>Ministerio de Trabajo y Promoción del Empleo</h3>
        <span className='text-sm'>Empresa * Administración gubernamental</span>
        <button className='py-1.5 px-10 bg-blue-500 hover:bg-blue-700 w-2/4 flex items-center justify-center rounded-3xl gap-2 text-white'><i className="fas fa-plus"></i> Seguir</button>
        </div>
      </div>
      <div className="flex">
        <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/87/87b5d09864746623dfa934fbc6b74f0b1fc01b67.jpg" alt="avatar"  className='w-16 h-16 rounded-full' />
        <div className=" flex flex-1 flex-col text-left px-2.5">
        <h3 className='font-semibold text-base'>Ministerio de Trabajo y Promoción del Empleo</h3>
        <span className='text-sm'>Empresa * Administración gubernamental</span>
        <button className='py-1.5 px-10 bg-blue-500 hover:bg-blue-700 w-2/4 flex items-center justify-center rounded-3xl gap-2 text-white'><i className="fas fa-plus"></i> Seguir</button>
        </div>
      </div>
      <h3>Ver todas las recomendaciones <i className="fas fa-arrow-right"></i></h3>
    </div>
  </div>;
};
