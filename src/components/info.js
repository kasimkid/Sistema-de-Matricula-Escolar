import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../styles/info.css";

export const Info = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const [studentInfo, setStudentInfo] = useState(null);

    useEffect(() => {
        actions.getInfo(id);
    }, []);

    useEffect(() => {
        const student = store.students.find(student => student.id === parseInt(id));

        if (student && !studentInfo) {
            setStudentInfo(student);
        }
    }, [store.students, id, studentInfo]);

    return (
        <div className="container mt-4">
            {studentInfo && (
                <div key={studentInfo.id}>
                    <img src={studentInfo.url_img} alt="Foto de perfil del estudiante" className="student-image" />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="info-heading">Información del Estudiante</div>
                            <ul>
                                <li><span className="info-label">Rut:</span> {studentInfo.rut}</li>
                                <li><span className="info-label">Nombre:</span> {studentInfo.name}</li>
                                <li><span className="info-label">Apellido:</span> {studentInfo.last_name}</li>
                                <li><span className="info-label">Género:</span> {studentInfo.gender}</li>
                                <li><span className="info-label">Cumpleaños:</span> {studentInfo.birthday}</li>
                                <li><span className="info-label">Dirección:</span> {studentInfo.address}</li>
                                <li><span className="info-label">Correo:</span> {studentInfo.email_student}</li>
                                <li><span className="info-label">Sistema de Salud:</span> {studentInfo.health_system}</li>
                                <li><span className="info-label">Observación:</span> {studentInfo.observation}</li>
                                <li><span className="info-label">Curso:</span> {studentInfo.course_name}</li>
                            </ul>
                            <div className="info-heading">Apoderado Financiero</div>
                            <ul>
                                <li><span className="info-label">Rut:</span> {studentInfo.apfinancial_rut_financial}</li>
                                <li><span className="info-label">Nombre:</span> {studentInfo.apfinancial_name}</li>
                                <li><span className="info-label">Apellido:</span> {studentInfo.apfinancial_last_name}</li>
                                <li><span className="info-label">Número de Contacto:</span> {studentInfo.apfinancial_contact_number}</li>
                                <li><span className="info-label">Dirección:</span> {studentInfo.apfinancial_address}</li>
                                <li><span className="info-label">Correo:</span> {studentInfo.apfinancial_email}</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            

                            <div className="info-heading">Apoderado Académico</div>
                            <ul>
                                <li><span className="info-label">Rut:</span> {studentInfo.apacademic_rut_academic}</li>
                                <li><span className="info-label">Nombre:</span> {studentInfo.apacademic_name}</li>
                                <li><span className="info-label">Apellido:</span> {studentInfo.apacademic_last_name}</li>
                                <li><span className="info-label">Número de Contacto:</span> {studentInfo.apacademic_contact_number}</li>
                                <li><span className="info-label">Dirección:</span> {studentInfo.apacademic_address}</li>
                                <li><span className="info-label">Correo:</span> {studentInfo.apacademic_email}</li>
                            </ul>
                        </div>
                    </div>
                    <p>NOTA: Si encuentra algún error en esta información, póngase en contacto con 
                        la administración de nuestro colegio indicando dónde se encuentra el error, 
                        a nuestro correo <a href="mailto:matriculas@colegio.cl">matriculas@colegio.cl</a>.


                    </p>
                </div>
            )}
        </div>
    );
};