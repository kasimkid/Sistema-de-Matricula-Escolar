import React from "react";

export const NewAcount = () => {

  
  return (
    <div className="d-flex justify-content-center">
      <form className="w-50 border border-4 shadow rounded p-5 my-3">
        <div className="">
          <label htmlFor="rut" className="form-control-label">
            Ingrese su Rut
          </label>
          <div>
            <input
              type="text"
              className="form-control"
              id="rut"
              placeholder="Rut"
              required
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="password" className="form-control-label">
            Contraseña
          </label>
          <div>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Contraseña"
              required
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="inputName" className="form-label">
            Nombre
          </label>
          <div>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Nombre"
              required
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="inputLastName" className="form-label">
            Apellidos
          </label>
          <div>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Apellido Paterno y Materno"
              required
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button type="submit" className="btn btn-primary my-2 col-">
            Crear
          </button>
        </div>
      </form>
      </div>
  );
};