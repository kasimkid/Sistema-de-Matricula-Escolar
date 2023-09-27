import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../style/studentform.css"

export const StudentForm = () => {

    const { actions } = useContext(Context)



    const [formData, setFormData] = useState({
        rut:"",
        name: "",
        password:"",
        last_name: "",
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
    console.log("formdata ", formData )

    };

    const handleSubmit = (event) => {
        event.preventDefault();

        actions.formStudents(formData);
        setFormData({
            rut:"",
            name: "",
            password:"",
            last_name: "",
            gender: "",
            birthday: "",
            address: "",
            email: "",
            health_system: "",
            observation: ""
        })
    } 


    return (
        
            <div className="container">
                <div className="row">
                    <form className="d-flex justify-content-center" onSubmit= {handleSubmit}>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="rut">Rut:</label>
                                <input type="text" className="form-control" id="rut" name="rut" onChange={handleChange} value={formData.rut} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Nombre:</label>
                                <input type="text" className="form-control" id="name" name="name" onChange={handleChange} value={formData.name} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Apellido:</label>
                                <input type="text" className="form-control" id="last_name" name="last_name" onChange={handleChange} value={formData.last_name} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">password:</label>
                                <input type="password" className="form-control" id="password" name="password" onChange={handleChange} value={formData.password} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="gender">Género:</label>
                                <select className="form-control" id="gender" name="gender" onChange={handleChange} value={formData.gender}>
                                    <option value="" disabled hidden></option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="birthday">Fecha de Nacimiento:</label>
                                <input type="date" className="form-control" id="birthday" name="birthday" onChange={handleChange} value={formData.birthday} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="address">Dirección:</label>
                                <input type="text" className="form-control" id="address" name="address" onChange={handleChange} value={formData.address} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="form-control" id="email" name="email" onChange={handleChange} value={formData.email} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="health_system">Sistema de Salud:</label>
                                <select className="form-control" id="health_system" name="health_system" onChange={handleChange} value={formData.health_system}>
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
                                <textarea className="form-control" id="observation" name="observation" maxLength="250" onChange={handleChange} value={formData.observation}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mt-2">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>

    )
}
