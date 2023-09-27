import React, { useState } from "react";

export const Login = () => {
  


  return (
    <>
      <section className="box-log row">
        <form>
          <div className="mt-3">
            <label for="text" className="form-control-label">
              Ingrese su Rut
            </label>
            <div>
              <input
                type="text"
                className="form-control input-rut"
                id="rut-number"
                placeholder="Rut"
                requerid
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="inputPassword" className="form-label">
              Contraseña
            </label>
            <div>
              <input
                type="password"
                className="form-control input-pass"
                id="inputPassword"
                placeholder="password"
                requerid
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary my-2">
                Ingresar
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
