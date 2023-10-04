import React from "react";
import "../styles/home.css";

export const Login = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <form className="col-8 p-4 b rounded login">
          <div className=" mb-3">
            <label htmlFor="rut-number" className="form-label">
              Rut
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ingrese su rut"
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
              className="form-control"
              id="exampleInputPassword1"
              placeholder="contraseña"
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
