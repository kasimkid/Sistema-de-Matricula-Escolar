import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const NewAcount = () => {
  const { actions } = useContext(Context)
  const [log, setLog] = useState({
    rut: "",
    password: "",
    name: "",
    last_name: "",
    email: "",
    roll: ""
  })
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLog({ ...log, [name]: value });
  };
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setLog({ ...log, roll: value }); // Cambiado para solo actualizar el rol

  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    await actions.createAccount(log)
 

    setLog()
  }


  return (
    <div className="d-flex justify-content-center">
      <form className="w-50 border border-4 shadow rounded p-5 my-3" onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="rut" className="form-control-label">
            Ingrese su Rut
          </label>
          <div>
            <input
              type="text"
              className="form-control"
              name="rut"
              id="rut"
              placeholder="Rut"
              value={log.rut}
              onChange={handleChange}
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
              name="password"
              id="password"
              placeholder="Contraseña"
              value={log.password}
              onChange={handleChange}
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
              name="name"
              id="name"
              placeholder="Nombre"
              value={log.name}
              onChange={handleChange}
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
              id="last_name"
              name="last_name"
              placeholder="Apellido Paterno y Materno"
              value={log.last_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="inputEmail" className="form-label">
            Correo
          </label>
          <div>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="email@gmail.com"
              value={log.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-check mt-2">
          <input className="form-check-input" type="checkbox" onChange={handleCheckboxChange} checked={log.roll === "2"} value="2" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Estudiante
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={handleCheckboxChange} checked={log.roll === "1"} value="1" id="flexCheckChecked" />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Administrador
          </label>
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