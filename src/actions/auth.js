import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
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

export const setUser = (uid='', displayName='', photoURL='') => {
  return async()=>{
    const docRef = await setDoc(doc(db, `user/${uid}`), {
      displayName,
      photoURL,
    });
  }
};

export const authRegister = (email, password, name) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user.displayName) {
          console.log(user.displayName)
        } else {
          console.log('no name')
          console.log(user.uid)
          const photoURL =
            "https://res.cloudinary.com/react-romel/image/upload/v1617636275/n2c8uanoks7hjod45fjd.jpg";
          updateProfile(user, {
            displayName: name,
            photoURL,
          });
          // setUser({
          //   displayName: name,
          //   photoURL,
          //   uid: user.uid,
          // });
          dispatch(login(user.uid, name, photoURL));
          dispatch(setUser(`${user.uid}`, name, photoURL));
        }
        Swal.fire({
          icon: "success",
          title: "Correcto",
          text: "Se Registro correctamente...",
        });
      })
      .catch((error) => Swal.fire("Error", error.message, "error"));
  };
};

export const authLogin = (email, password) => {
  return (dispatch)=>{
    const auth = getAuth();
    // const { setUser } = useContext(AuthContext);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // const {displayName,photoURL}=user;
        console.log(user.displayName);
        const {uid, displayName, photoURL}=user;
        dispatch(login(uid, displayName, photoURL));
        Swal.fire({
          icon: "success",
          title: "Correcto",
          text: "Se Logueo correctamente...",
        });
      })
      .catch((error) => {
        //   const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          title: "Error",
          icon: "error",
          text: `${errorMessage}`,
        });
      });
  }
};