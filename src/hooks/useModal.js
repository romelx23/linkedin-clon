import { useState } from "react";

export const useModal = () => {
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState({
    image: false,
    video: false,
    evento: false,
  });

  const toggle = () => setModal(!modal);
  // console.log(modal);
  const handleShow = (show = "") => {
      toggle()
    if (show === "image") setShow({ image: true, video: false, evento: false });
    else if (show === "video") setShow({ image: false, video: true, evento: false });
    else if (show === "event") setShow({ image: false, video: false, evento: true });
  };

  return {
    modal,
    toggle,
    show,
    handleShow,
  };
};
