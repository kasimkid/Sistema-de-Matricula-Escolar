import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const AcademicForm = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    rut_academic: "",
    name: "",
    last_name: "",
    contact_number: "",
    address: "",
    email: "",
  });

  // const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormData({ ...formData, [name]: value });
  //     console.log("formdata ", formData)

  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      actions.editAcademic(id, formData);
    } else {
      actions.formAcademic(formData);
    }
    setFormData({
      rut_academic: "",
      name: "",
      last_name: "",
      contact_number: "",
      address: "",
      email: "",
    });
  };

  return (
    <div>
      <form className="container gap-2 w-50" onSubmit={handleSubmit}>
      <h3 className="text-center">Apoderado Académico</h3>
        <div className="form-group">
          <label htmlFor="rut_academic">Rut:</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="rut_academic"
            name="rut_academic"
            onChange={actions.dataAcademic}
            value={store.data.rut_academic}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Nombres:</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="name"
            name="name"
            onChange={actions.dataAcademic}
            value={store.data.name}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Apellidos:</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="last_name"
            name="last_name"
            onChange={actions.dataAcademic}
            value={store.data.last_name}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact_number">Número de Contacto:</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="contact_number"
            name="contact_number"
            onChange={actions.dataAcademic}
            value={store.data.contact_number}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Dirección:</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="address"
            name="address"
            onChange={actions.dataAcademic}
            value={store.data.address}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email_apoderado">Email:</label>
          <input
            type="email"
            className="form-control form-control-sm"
            id="email"
            name="email"
            onChange={actions.dataAcademic}
            value={store.data.email}
          />
        </div>
        <div>
          <Link to="/formfinanciero">
            <button type="submit" className="btn btn-primary mt-2 mx-2">
              siguiente
            </button>
          </Link>
          <Link to="/formstudent">
            <button type="submit" className="btn btn-danger mt-2">
              atras
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
