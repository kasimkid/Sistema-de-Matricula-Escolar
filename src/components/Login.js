import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../styles/home.css";

export const Login = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [loginStudent, setLoginStudent] = useState({
    rut: "",
    password: ""
  });

  const handleChange = (event) => {
    setLoginStudent({ ...loginStudent, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    actions.login(loginStudent, navigate)
    setLoginStudent({
      rut: "",
      password: "",
    });
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
              name="rut"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ingrese su rut"
              value={loginStudent.rut}
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="contraseña"
              value={loginStudent.password}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
          <button type="submit" className="btn btn-success">
            Ingresar
          </button>
          </div>
        </form>
      </div>
    </>
  );
};
