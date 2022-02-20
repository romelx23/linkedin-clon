import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const PrivateRoute = ({children}) => {
    const {uid} = useSelector(state=>state.auth);
    // console.log(uid);
    return uid
    ? children
    :<Navigate to="/auth/login"/>
};
