import React from "react";
import { ButtonTop } from "../components/ButtonTop/ButtonTop";
import { LateralBusiness } from "../components/LateralBusiness/LateralBusiness";
import { LateralProfile } from "../components/LateralProfile/LateralProfile";
import { Modal } from "../components/Modal/Modal";
import { ModalUpload } from "../components/ModalUpload/ModalUpload";
import { Navbar } from "../components/Navbar/Navbar";
import { Publication } from "../components/Publication/Publication";
import { useModal } from "../hooks/useModal";

export const HomeScreen = () => {
  const {modal,toggle}=useModal()
  const {modal:file,toggle:toggleFile,show,handleShow}=useModal()
  return (
    <div className="min-w-full min-h-screen bg-blue-800">
      <Navbar />
      <div className="lg:grid lg:grid-cols-11 h-auto py-3 flex flex-col">
        <LateralProfile />
        <Publication toggle={toggle} handleShow={handleShow}/>
        <LateralBusiness/>
        <ButtonTop/>
      </div>
      <Modal modal={modal} toggle={toggle}/>
      <ModalUpload modal={file} toggle={toggleFile} show={show}/>
    </div>
  );
};
