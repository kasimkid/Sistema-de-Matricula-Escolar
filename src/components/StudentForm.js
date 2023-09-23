import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const StudentForm = () => {

    const { store, actions } = useContext(Context)



    const [formData, setFormData] = useState({
        name: "",
        last_name:"",
        gender: "",
        birthday: "",
        address: "",
        email: "",
        health_system: "",
        observation: ""
    });
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form>
            <div className="form-group">
                <label htmlFor="rut">Rut:</label>
                <input type="text" className="form-control" id="rut" name="rut" required />
            </div>
            <div className="form-group">

                <label htmlFor="name">Nombre:</label>
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="last_name">Apellido:</label>
                <input type="text" className="form-control" id="last_name" name="last_name" required />
            </div>
            <div className="form-group">
                <label htmlFor="gender">Género:</label>
                <input type="text" className="form-control" id="gender" name="gender" />
            </div>
            <div className="form-group">
                <label htmlFor="birthday">Fecha de Nacimiento:</label>
                <input type="date" className="form-control" id="birthday" name="birthday" />
            </div>
            <div className="form-group">
                <label htmlFor="address">Dirección:</label>
                <input type="text" className="form-control" id="address" name="address" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" name="email" />
            </div>
            <div className="form-group">
                <label htmlFor="health_system">Sistema de Salud:</label>
                <input type="text" className="form-control" id="health_system" name="health_system" />
            </div>
            <div className="form-group">
                <label htmlFor="v">Observación:</label>
                <textarea className="form-control" id="observation" name="observation"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}
