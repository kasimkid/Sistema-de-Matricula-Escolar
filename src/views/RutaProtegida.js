import React, { useContext } from "react";
import { Navigate, Outlet } from 'react-router-dom'
import { Context } from "../store/appContext";


const RutaProtegida = () => {
  const { store } = useContext(Context)

  const token = store.dataUser.access_token
  // const token = JSON.parse(localStorage.getItem('logstudent'))


  return (
    <>
      {
        token ? (<Outlet />) : (<Navigate to="/" />)
      }
    </>
  )
}

export default RutaProtegida
