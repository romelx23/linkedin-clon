import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useSearchUser = () => {
  const [users, setUsers] = useState([]);
  const postcollection = query(collection(db, "user"));
  // where("displayName", "==", user),
  useEffect(() => {
    const unSubscribe = onSnapshot(postcollection, (docs) => {
      const user = [];
      docs.forEach((doc) => {
        const { date, ...data } = doc.data();
        user.push({
          id: doc.id,
          ...data,
        });
      });
      setUsers(user);
    });
    // console.log(users);
    return () => {
      unSubscribe();
    };
  }, []);
  return {
    users,
    setUsers,
  };
};
// traer las solicitudes de amistad
export const useRequestSend = (uid = "") => {
  const [users, setUsers] = useState([]);
  const postcollection = query(collection(db, `user/${uid}/request`));
  useEffect(() => {
    const unSubscribe = onSnapshot(postcollection, (docs) => {
      const user = [];
      docs.forEach((doc) => {
        const { date, ...data } = doc.data();
        user.push({
          id: doc.id,
          ...data,
        });
      });
      setUsers(user);
    });
    // console.log(users);
    return () => {
      unSubscribe();
    };
  }, []);
  return {
    users,
  };
};
// traer las solicitudes de recibidas
export const useRecibedEmails = (uid = "") => {
  const [users, setUsers] = useState([]);
  const postcollection = query(collection(db, `user/${uid}/recived`));
  useEffect(() => {
    const unSubscribe = onSnapshot(postcollection, (docs) => {
      const user = [];
      docs.forEach((doc) => {
        const { date, ...data } = doc.data();
        user.push({
          id: doc.id,
          ...data,
        });
      });
      setUsers(user);
    });
    // console.log(users);
    return () => {
      unSubscribe();
    };
  }, []);
  return {
    users,
  };
};
// traer las amigos en tiempo real
export const useFriends = (uid = "") => {
  const [users, setUsers] = useState([]);
  const postcollection = query(collection(db, `user/${uid}/friends`));
  useEffect(() => {
  const unSubscribe = onSnapshot(postcollection, (docs) => {
    const user = [];
    docs.forEach((doc) => {
      const { date, ...data } = doc.data();
      user.push({
        id: doc.id,
        ...data,
      });
    });
    setUsers(user);
  });
  // console.log(users);
  return ()=>{
    unSubscribe()
  }
  }, [postcollection]);
  return {
    users,
  };
};

// traer amigos

export const useFriendsChat = async (uid = "") => {
  const [users, setUsers] = useState([]);
  const userscollection = query(collection(db, `user/${uid}/friends`));
  const querySnapShot = await getDocs(userscollection) 

    const user = [];
    querySnapShot.forEach((doc) => {
      const { date, ...data } = doc.data();
      user.push({
        id: doc.id,
        ...data,
      });
    });
    setUsers(user);
    console.log(user)

  return {
    users,
  };
};
