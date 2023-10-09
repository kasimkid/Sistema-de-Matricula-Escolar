import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../styles/studentform.css";
import { Upload } from "./upload";

export const StudentForm = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate()

  const { id } = useParams();
  const [imageURL, setImageURL] = useState("");
  const [formData, setFormData] = useState({
    rut: "",
    name: "",
    password: "123456",
    last_name: "",
    gender: "",
    birthday: "",
    address: "",
    email: "",
    health_system: "",
    observation: "",
    url_img: "",
    student_id: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (url) => {
    setImageURL(url); // Almacena la URL de la imagen en el estado
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataWithImage = { ...formData, url_img: imageURL };
    if (id) {
      actions.editStudent(id, formDataWithImage);
    } else {
      const respuesta = await actions.formStudents(formDataWithImage);

      console.log(respuesta)
    
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
        url_img: "",
        student_id: "",
      });
      setImageURL("");
      navigate("/my-app/formfinanciero")
    }
  };


  return (
    <div className="container p-5 mt-5 box shadow">
      <h2 className="text-center mb-5">Datos del estudiante</h2>
      <form className="" onSubmit={handleSubmit}>
        <div className="row justify-content-center ">
          <div className="col-10 border border-4 shadow rounded py-2 px-5">
            <div className="row">
              <div className="col-12 col-md-6 p-3">
                <div className="form-group">
                  <label htmlFor="rut">Rut</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="rut"
                    name="rut"
                    onChange={handleChange}
                    value={formData.rut}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
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
                  <label htmlFor="last_name">Apellido</label>
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
                  <label htmlFor="gender">Género</label>
                  <select
                    className="form-select form-select-sm"
                    id="gender"
                    name="gender"
                    onChange={handleChange}
                    value={formData.gender}
                    required
                  >
                    <option value="" disabled hidden></option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="observation">Observación</label>
                  <textarea
                    className="form-control form-control-sm"
                    id="observation"
                    name="observation"
                    maxLength="250"
                    onChange={handleChange}
                    value={formData.observation}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="col-12 col-md-6 p-3">
                <div className="form-group">
                  <label htmlFor="birthday">Fecha de Nacimiento</label>
                  <input
                    type="date"
                    className="form-control form-control-sm"
                    id="birthday"
                    name="birthday"
                    onChange={handleChange}
                    value={formData.birthday}
                    required
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
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="health_system">Sistema de Salud</label>
                  <select
                    className="form-select form-select-sm"
                    id="health_system"
                    name="health_system"
                    onChange={handleChange}
                    value={formData.health_system}
                    required
                  >
                    <option value="" disabled hidden></option>
                    <option value="Fonasa">Fonasa</option>
                    <option value="Isapre">Isapre</option>
                    <option value="Dipreca">Dipreca</option>
                    <option value="Capredena">Capredena</option>
                    <option value="Disanfa">Disanfa</option>
                  </select>
                </div>
                <Upload handleImageUpload={handleImageUpload} />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 d-flex d-flex justify-content-end mt-3">
            <button type="submit" className="btn btn-success mt-2 mx-2 shadow">
              Guardar
            </button>
            <Link to="/" className="btn btn-danger mt-2 mx-2 shadow">
              Cancelar
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
