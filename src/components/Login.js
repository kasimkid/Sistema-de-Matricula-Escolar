import React, { useContext, useState } from "react";
import "../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const Login = () => {

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState (null)




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
    let loginUser;
    try {
      loginUser = await actions.login(log)
      console.log('loginUser', loginUser)
    }catch(error){
      console.log(error)
    }   
    
    if(!loginUser.data){
      return 
    }
    if (loginUser.data.roll === 1){
      navigate ("/my-app/admin")
    }
    else{
      navigate("/my-app/formstudent")
    }
    setLog({
      rut: "",
      password: ""
    })
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
      </div>
    </>
  );
};