import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../style/studentform.css"

export const StudentForm = () => {

    return (
        <div className="container">
            <div className="row">
                <form className="d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="rut">Rut:</label>
                            <input type="text" className="form-control" id="rut" name="rut" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" className="form-control" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Apellido:</label>
                            <input type="text" className="form-control" id="last_name" name="last_name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="genre">Género:</label>
                            <select className="form-control" id="genre" name="genre">
                               <option value="" disabled hidden></option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="birthday">Fecha de Nacimiento:</label>
                            <input type="date" className="form-control" id="birthday" name="birthday" />
                        </div>
                    </div>
                    <div className="col-md-6">
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
                            <select className="form-control" id="health_system" name="health_system">
                                <option value=""disabled hidden></option>
                                <option value="Fonasa">Fonasa</option>
                                <option value="Isapre">Isapre</option>
                                <option value="Dipreca">Dipreca</option>
                                <option value="Capredena">Capredena</option>
                                <option value="Disanfa">Disanfa</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="observation">Observación:</label>
                            <textarea className="form-control" id="observation" name="observation" maxLength="250"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>
                </form>
            </div>
        </div>

    )
}
