import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
function ProtectedRoute() {
    const islogin=JSON.parse(localStorage.getItem("loggedIn"));
    if(islogin)
    return <Outlet/>
    else 
    return <Navigate to={"/"}/>
}

export default ProtectedRoute
