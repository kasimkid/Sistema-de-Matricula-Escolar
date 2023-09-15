import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const GuardianForm = () => {

    return (
        <form action="procesar_apoderado.php" method="POST">
            <div className="form-group">
                <label htmlFor="rut_apoderado">Rut:</label>
                <input type="text" className="form-control" id="rut_apoderado" name="rut_apoderado" required />
            </div>
            <div className="form-group">
                <label htmlFor="names_apoderado">Nombres:</label>
                <input type="text" className="form-control" id="names_apoderado" name="names_apoderado" required />
            </div>
            <div className="form-group">
                <label htmlFor="last_names_apoderado">Apellidos:</label>
                <input type="text" className="form-control" id="last_names_apoderado" name="last_names_apoderado" required />
            </div>
            <div className="form-group">
                <label htmlFor="contact_number_apoderado">Número de Contacto:</label>
                <input type="text" className="form-control" id="contact_number_apoderado" name="contact_number_apoderado" />
            </div>
            <div className="form-group">
                <label htmlFor="address_apoderado">Dirección:</label>
                <input type="text" className="form-control" id="address_apoderado" name="address_apoderado" />
            </div>
            <div className="form-group">
                <label htmlFor="email_apoderado">Email:</label>
                <input type="email" className="form-control" id="email_apoderado" name="email_apoderado" />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}

