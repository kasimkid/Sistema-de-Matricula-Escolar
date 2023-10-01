import React, { useContext, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../styles/studentform.css";

export const StudentForm = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [formData, setFormData] = useState({});

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  //   console.log("formdata ", formData);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      actions.editStudent(id, formData);
    } else {
      actions.formStudents(formData);
    }
    setFormData({
      rut: "",
      name: "",
      password: "",
      last_name: "",
      gender: "",
      birthday: "",
      address: "",
      email: "",
      health_system: "",
      observation: "",
    });
  };

  return (
    <div className="container">
      <h3 className="text-center">Datos del estudiante</h3>
      <div className="row">
        <form
          className="d-flex justify-content-center gap-3 w-75"
          onSubmit={handleSubmit}
        >
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="rut">Rut:</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="rut"
                name="rut"
                onChange={actions.dataStudent}
                value={store.data.student.rut}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="name"
                name="name"
                onChange={actions.dataStudent}
                value={store.data.student.name}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Apellido:</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="last_name"
                name="last_name"
                onChange={actions.dataStudent}
                value={store.data.student.last_name}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">password:</label>
              <input
                type="password"
                className="form-control form-control-sm"
                id="password"
                name="password"
                onChange={actions.dataStudent}
                value={store.data.student.password}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="genre">Género:</label>
              <select
                className="form-control form-control-sm"
                id="gender"
                name="gender"
                onChange={actions.dataStudent}
                value={store.data.student.gender}
              >
                <option value="" disabled hidden></option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="birthday">Fecha de Nacimiento:</label>
              <input
                type="date"
                className="form-control"
                id="birthday"
                name="birthday"
                onChange={actions.dataStudent}
                value={store.data.student.birthday}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Dirección:</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="address"
                name="address"
                onChange={actions.dataStudent}
                value={store.data.student.address}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control form-control-sm"
                id="email"
                name="email"
                onChange={actions.dataStudent}
                value={store.data.student.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="health_system">Sistema de Salud:</label>
              <select
                className="form-control form-control-sm"
                id="health_system"
                name="health_system"
                onChange={actions.dataStudent}
                value={store.data.student.health_system}
              >
                <option value="" disabled hidden></option>
                <option value="Fonasa">Fonasa</option>
                <option value="Isapre">Isapre</option>
                <option value="Dipreca">Dipreca</option>
                <option value="Capredena">Capredena</option>
                <option value="Disanfa">Disanfa</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="observation">Observación:</label>
              <textarea
                className="form-control form-control-sm"
                id="observation"
                name="observation"
                maxLength="250"
                onChange={actions.dataStudent}
                value={store.data.student.observation}
              ></textarea>
            </div>
            <div>
              <Link to="/formacademico">
                <button type="submit" className="btn btn-primary mt-2 mx-2">
                  siguiente
                </button>
              </Link>
              <button type="submit" className="btn btn-danger mt-2">
                atras
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
