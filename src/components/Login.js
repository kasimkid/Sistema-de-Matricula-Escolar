import React, { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const Login = () => {
  
  const {actions } = useContext(Context)
  const navigate = useNavigate()
  

  const [log, setLog] = useState({
    rut:"",
    password:""
  })  
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLog({ ...log, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
 
    const loginUser = await actions.login(log)

    if (!/^\d{7,8}-[\dkK]$/.test(log.rut)) {
      // alert("rut no valido")
      toast.error('rut no valido', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return;
    }
    if (!log.password > 6) {
      toast.error(' password invalido, debe contener mas de 6 caracteres ', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return;
    }
    if (loginUser.data.roll === 1){
      navigate ("/my-app/admin")
    }
    else{
      navigate("/my-app/formstudent")
    }
    setLog()
    console.log(loginUser.data.roll)
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <form className="col-8 p-4 b rounded login" onSubmit={handleSubmit}>
          <div className=" mb-3">
            <label htmlFor="rut-number" className="form-label">
              Rut
            </label>
            <input
              type="text"
              className="form-control"
              id="rut-number"
              name="rut"
              placeholder="Ingrese su rut"
              onChange={handleChange}
              value={log.rut}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="contraseña"
              onChange={handleChange}
              value={log.password}
              required
            />
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="" className="btn btn-success">
              Ingresar
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};
