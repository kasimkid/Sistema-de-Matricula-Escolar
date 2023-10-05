import React, { useContext, useEffect, useState } from "react";
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
    student_id: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log("formdata ", formData);
  };

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
      student_id: "",
    });
  };
  useEffect(() => {
    actions.getStudents();
  }, []);

  return (
    <div className="container">
      <h3 className="text-center">Apoderado Académico</h3>
      <form
        className="row d-flex justify-content-center"
        onSubmit={handleSubmit}
      >
        <div className="col-12 col-md-6 p-4">
          <div className="form-group">
            <label htmlFor="rut_academic">Rut</label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="rut_academic"
              name="rut_academic"
              onChange={handleChange}
              value={formData.rut_academic}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nombres</label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Apellidos</label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="last_name"
              name="last_name"
              onChange={handleChange}
              value={formData.last_name}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="student">Estudiante</label>
            <select
              className="form-control"
              id="student_id"
              name="student_id"
              onChange={handleChange}
              value={formData.student_id}
            >
              <option value="" disabled hidden></option>
              {store.students.map((student) => (
                <option
                  key={student.id}
                  value={student.id}
                >{`${student.name} ${student.last_name} ${student.rut}`}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="contact_number">Número de Contacto</label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="contact_number"
              name="contact_number"
              onChange={handleChange}
              value={formData.contact_number}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Dirección</label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="address"
              name="address"
              onChange={handleChange}
              value={formData.address}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email_apoderado">Email</label>
            <input
              type="email"
              className="form-control form-control-sm"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="d-flex d-flex justify-content-end ">
            <button type="submit" className="btn btn-primary mt-2 mx-2">
              Guardar
            </button>
            <Link to="/formstudent">
              <button type="submit" className="btn btn-danger mt-2">
                Atras
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
