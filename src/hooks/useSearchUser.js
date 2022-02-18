import {
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useSearchUser = () => {
  const [users, setUsers] = useState([]);
  const postcollection = query(
    collection(db, "user")
  );
  // where("displayName", "==", user),
  useEffect(() => {
    const unSubscribe=onSnapshot(postcollection, (docs) => {
      const user = [];
      docs.forEach((doc) => {
        const {date,...data}=doc.data();
        user.push({
          id: doc.id,
          ...data,
        });
      });
      setUsers(user)
    });
    // console.log(users);
    return ()=>{
      unSubscribe()
    }
  }, []);
  return {
    users,
    setUsers
  };
};
