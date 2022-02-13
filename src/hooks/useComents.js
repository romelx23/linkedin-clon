import { addDoc, collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const createComent = async (coment, uid, username, user_url) => {
    const fecha = new Date();
    const docRef = await addDoc(collection(db, `linkedin/${uid}/coment`), {
      coment,
      username,
      user_url,
      date: fecha,
    });
  };

  export const useGetComents = (uid) => {
    const [coment, setComent] = useState([]);
    const comentCollection = query(collection(db, `linkedin/${uid}/coment`),orderBy("date", "desc"),limit(10));
    useEffect(() => {
      const unsSubcribe=onSnapshot(comentCollection, (docs) => {
        const coments = [];
        docs.forEach((doc) => {
          coments.push({
            ...doc.data(),
          });
        });
        setComent(coments)
      });
      return () => {
        unsSubcribe()
      };
    }, []);
    return {
      coment,
      setComent
    };
  };