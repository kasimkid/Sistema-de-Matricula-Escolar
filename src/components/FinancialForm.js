import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const FinancialForm = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const [formData, setFormData] = useState({
        rut_financial: "",
        name: "",
        last_name: "",
        contact_number: "",
        address: "",
        email: "",
        student_id: ""
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log("formdata ", formData)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (id) {
            actions.editFinancial(id, formData);
        } else {
            actions.formFinancial(formData);
        }
        setFormData({
            rut_financial: "",
            name: "",
            last_name: "",
            contact_number: "",
            address: "",
            email: "",
            student_id: ""
        })
    
    };
    useEffect(() => {
        actions.getStudents();
        console.log("store.students", store.students)
      }, [])

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="rut_financial">Rut:</label>
                <input type="text" className="form-control" id="rut_financial" name="rut_financial" onChange={handleChange} value={formData.rut_financial} required />
            </div>
            <div className="form-group">
                <label htmlFor="name">Nombres:</label>
                <input type="text" className="form-control" id="name" name="name" onChange={handleChange} value={formData.name} required />
            </div>
            <div className="form-group">
                <label htmlFor="last_name">Apellidos:</label>
                <input type="text" className="form-control" id="last_name" name="last_name" onChange={handleChange} value={formData.last_name} required />
            </div>
            <div className="form-group">
                <label htmlFor="student">Estudiante:</label>
                <select className="form-control" id="student_id" name="student_id" onChange={handleChange} value={formData.student_id}>
                    <option value="" disabled hidden></option>
                    {store.students.map(student => (
                    <option key={student.id} value={student.id}>{`${student.name} ${student.last_name} ${student.rut}`}</option>))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="contact_number">Número de Contacto:</label>
                <input type="text" className="form-control" id="contact_number" name="contact_number" onChange={handleChange} value={formData.contact_number} />
            </div>
            <div className="form-group">
                <label htmlFor="address">Dirección:</label>
                <input type="text" className="form-control" id="address" name="address" onChange={handleChange} value={formData.address} />
            </div>
            <div className="form-group">
                <label htmlFor="email_apoderado">Email:</label>
                <input type="email" className="form-control" id="email" name="email" onChange={handleChange} value={formData.email} />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}

