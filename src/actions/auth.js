import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { auth, db } from "../firebase/config";
import { types } from "../types/types";

export const login = (uid, displayName, photoUrl) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
    photoUrl,
  },
});

export const logout = () => ({
  type: types.logout,
});

export const handleLogOut = () => {
  return (dispatch) => {
    const auth = getAuth();
    signOut(auth);
    dispatch(logout());
  };
};

export const LoginWithGoogle = () => {
  return (dispatch) => {
    // const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user.displayName);
        const { uid, displayName, photoURL } = user;
        dispatch(login(uid, displayName, photoURL));
        dispatch(setUser(uid, displayName, photoURL));
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };
};

// export const createUser=()=>({
//   type:types.createUser,

// })

export const setUser = async (uid, displayName, photoURL) => {
  const docRef = await setDoc(doc(db, `user/${uid}`), {
    displayName,
    photoURL,
  });
};
