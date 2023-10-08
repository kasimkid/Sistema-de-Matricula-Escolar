import React from "react";

export const NewAcount = () => {
  return (
    <div className="d-flex justify-content-center">
      <form className="w-50 border border-3 shadow rounded p-5">
        <div className="mt-3">
          <label htmlFor="rut-number" className="form-control-label">
            Ingrese su Rut
          </label>
          <div>
            <input
              type="text"
              className="form-control"
              id="rut-number"
              placeholder="Rut"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Contraseña
          </label>
          <div>
            <input
              type="password"
              className="form-control"
              id="inputName"
              placeholder="Contraseña"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Nombre
          </label>
          <div>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Nombre"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputLastName" className="form-label">
            Apellidos
          </label>
          <div>
            <input
              type="text"
              className="form-control"
              id="inputLastName"
              placeholder="Apellido Paterno y Materno"
              required
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary my-2 col-">
            Crear
          </button>
        </div>
      </form>
      </div>
  );
};