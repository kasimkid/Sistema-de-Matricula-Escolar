import React, { useContext } from "react";
import { Navigate, Outlet } from 'react-router-dom'
import { Context } from "../store/appContext";


const RutaProtegida = () => {
  const { store, actions } = useContext(Context)

  const token = store.dataUser.access_token
  // const userData = store.dataUser?.data.roll

  // console.log(userData)

  return (

    <>
      {
        token ? (<Outlet />) : (<Navigate to="/" />)
      }
    </>
  )
}

export default RutaProtegida
