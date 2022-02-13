import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { login } from "../actions/auth";
import { StartloadPost } from "../actions/post";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { DashboardPrivate } from "./DashboardPrivate";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  // const { user } = useContext(AuthContext);

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      //Este metodo crea un observable
      //un observable tipo de objeto que se dispara mas de una vez 
      const auth = getAuth();
      const unSubscribe=onAuthStateChanged(auth,(user)=>{
          // console.log(user);
          if(user?.uid){
              dispatch(login(user.uid,user.displayName,user.photoURL));
              setIsLoggedIn(true);
              dispatch(StartloadPost());

          }else{
              setIsLoggedIn(false);
          }

          setChecking(false);
      });
  }, [dispatch,setChecking,setIsLoggedIn])

  if(checking){
      return(
          <h1 className="bg-blue-600 
          text-white
           font-bold
            text-3xl
            h-screen
            ">
              Espere....
              </h1>
      )
  }

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/auth/*" element={
            <PublicRoute>
              <DashboardPrivate/>
            </PublicRoute>
          }/>
          <Route path="/*" element={
            <PrivateRoute>
              <DashboardRoutes/>
            </PrivateRoute>
          } />
      </Routes>
    </BrowserRouter>
  );
};
