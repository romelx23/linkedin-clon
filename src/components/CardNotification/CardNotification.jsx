import { deleteUser } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { addFriend } from "../../actions/auth";
import { useFriends } from "../../hooks/useSearchUser";

export const CardNotification = ({ item, type }) => {
  const [acept, setAcept] = useState(false);
  const {theme}=useSelector(state=>state.ui)
  const dispatch = useDispatch();
  // mis datos
  const { uid, name, photoUrl } = useSelector((state) => state.auth);
  // los datos del usuario que acepto
  // datos de la notifiación
  const { displayName, photoURL, uid: uidRecibido } = item;
  // traigo documento de amigos
  const { users } = useFriends(uid);
  // console.log(uid,'uid')
  // console.log(uidRecibido,'uid recibido')
  // console.log(users);
  // console.log(users.filter((el) => el.id === uidRecibido));
  const handleAccept = () => {
    // Acepta la solcitud y se agrega al array amigos
    // Se envia una notificación al usuario indicando que ha aceptado su solcitud
    const userExist = users.filter((el) => el.id === uidRecibido);
    if (userExist.length !== 0) {
      setAcept(true);
      Swal.fire({
        title: "Ya has aceptado su solicitud",
        icon: "warning",
      });
      return false;
    }
    console.log("aceptado");
    // Añade a mis amigos
    dispatch(addFriend(uid, displayName, photoURL, uidRecibido));
    // enviarle el uid del usuario al que agregue
    dispatch(addFriend(uidRecibido, name, photoUrl, uid));
  };
  const handleReject = () => {
    // rechazas la solicitud pero
    // puedes volver a enviar solcitud
    // Se elimina solcitud de recibidos
    dispatch(deleteUser(uidRecibido, uid));
    Swal.fire({
      title: "Rechazo su solcitud",
      icon: "error",
    });
    console.log("rechazado");
  };
  useEffect(() => {
    const userExist = users.filter((el) => el.id === uidRecibido);
    if (userExist.length !== 0) {
      setAcept(true);
    }
  }, [uidRecibido, users])
  
  return (
    <div className={`flex p-3 border-b border-gray-400 bg-skin-button-muted ${theme}`}>
      <img className="w-16 h-16 rounded-full" src={photoURL} alt="logo__corp" />
      <div className="pl-2 flex-1 flex justify-between items-center">
        <div className="flex flex-col w-full">
          {type === "solicitud" ? (
            <span>Se ha enviado su solicitud a </span>
          ) : (
            <></>
          )}
          {type === "recibido" ? (
            <span>ha recibido una solicitud de</span>
          ) : (
            <></>
          )}
          {type === "aceptada" ? (
            <span>ha aceptado la solicitud de</span>
          ) : (
            <></>
          )}
          <h2 className="font-semibold">{displayName}</h2>
        </div>
        {type === "recibido" ? (
          <>
            {acept === true ? (
              <h1 className="font-semibold text-white">aceptado</h1>
            ) : (
              <div className="flex flex-col gap-1">
                <button
                  onClick={handleAccept}
                  className="bg-skin-button-muted w-40 rounded-lg hover:bg-skin-text-inverted"
                >
                  Aceptar <i className="fas fa-check text-green-500"></i>
                </button>
                <button
                  onClick={handleReject}
                  className="bg-skin-button-muted w-40 rounded-lg hover:bg-skin-text-inverted"
                >
                  Rechazar <i className="fas fa-times text-red-500"></i>
                </button>
              </div>
            )}
          </>
        ) : (
          <></>
        )}
        <i className="fas fa-ellipsis-h"></i>
      </div>
    </div>
  );
};
