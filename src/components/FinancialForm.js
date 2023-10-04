import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../styles/financialform.css";
import ModalConfirm from "./ModalConfirm";

export const FinancialForm = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    // rut_financial: "",
    // name: "",
    // last_name: "",
    // contact_number: "",
    // address: "",
    // email: "",
});

  // const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormData({ ...formData, [name]: value });
  //     console.log("formdata ", formData)

  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      actions.editFinancial(id, formData);
    } else {
      actions.formFinancial(formData);
    }
    // setFormData({
    //   rut_financial: "",
    //   name: "",
    //   last_name: "",
    //   contact_number: "",
    //   address: "",
    //   email: "",
    // });
  };
  const [show, setShow] = useState(false);

  const handleCLose = async () => {
    setShow(false);
    await actions.formStudents(store.dataStudent);
    await actions.formFinancial(store.dataFinancial);
    await actions.formAcademic(store.dataAcademic);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div className="container">
      <h3 className="text-center">Apoderado Financiero</h3>
    <form className="row d-flex justify-content-center" onSubmit={handleSubmit}>
      <ModalConfirm
        show={show}
        handleShow={handleShow}
        handleClose={handleCLose}
      />
  <div className="col-12 col-md-6 p-4">
      <div className="form-group">
        <label htmlFor="rut_financial">Rut:</label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="rut_financial"
          name="rut_financial"
          onChange={actions.dataFinancial}
          value={store.data.rut_financial}
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
          onChange={actions.dataFinancial}
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
          onChange={actions.dataFinancial}
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
          onChange={actions.dataFinancial}
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
          onChange={actions.dataFinancial}
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
          onChange={actions.dataFinancial}
          value={store.data.email}
        />
      </div>
      <div>
        <div className="d-flex d-flex justify-content-end ">
          <button
            type="submit"
            className="btn btn-primary mt-2 mx-2"
            onClick={handleShow}
          >
            Guardar
          </button>
        <Link to="/formacademico">
          <button type="submit" className="btn btn-danger mt-2">
            atras
          </button>
        </Link>
        </div>
      </div>
      </div>
    </form>
    </div>
  );
};
