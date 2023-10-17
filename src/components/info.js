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
        const student = store.students.find(
            (student) => student.id === parseInt(id)
        );

        if (student && !studentInfo) {
            setStudentInfo(student);
        }
    }, [store.students, id, studentInfo]);

    return (
        <>
        
        
            {studentInfo && (
                <div key={studentInfo.id} className="container box mt-2 p-3">
                    <div className="border border-4 shadow-4 rounded p-4">
                        <div className="row">
                            <div className="d-flex justify-content-center">
                                <div className="col-9">
                                    <h2 className="info-heading">Información del Estudiante</h2>
                                    <ul>
                                        <li>
                                            <span className="info-label">Rut:</span> {studentInfo.rut}
                                        </li>
                                        <li>
                                            <span className="info-label">Nombre:</span>{" "}
                                            {studentInfo.name}
                                        </li>
                                        <li>
                                            <span className="info-label">Apellido:</span>{" "}
                                            {studentInfo.last_name}
                                        </li>
                                        <li>
                                            <span className="info-label">Género:</span>{" "}
                                            {studentInfo.gender}
                                        </li>
                                        <li>
                                            <span className="info-label">Cumpleaños:</span>{" "}
                                            {studentInfo.birthday}
                                        </li>
                                        <li>
                                            <span className="info-label">Dirección:</span>{" "}
                                            {studentInfo.address}
                                        </li>
                                        <li>
                                            <span className="info-label">Correo:</span>{" "}
                                            {studentInfo.email_student}
                                        </li>
                                        <li>
                                            <span className="info-label">Sistema de Salud:</span>{" "}
                                            {studentInfo.health_system}
                                        </li>
                                        <li>
                                            <span className="info-label">Observación:</span>{" "}
                                            {studentInfo.observation}
                                        </li>
                                        <li>
                                            <span className="info-label">Curso:</span>{" "}
                                            {studentInfo.course_name}
                                        </li>
                                    </ul>
                                </div>
                                <img
                                    src={studentInfo.url_img}
                                    alt="Foto de perfil del estudiante"
                                    className="student-image col-3 justify-content-center"
                                />
                            </div>
                        </div>
                        <div className="row ms-2">
                            <div className="d-flex justify-content-center">
                                <div className="col-6">
                                    <h2 className="info-heading">Apoderado Financiero</h2>
                                    <ul>
                                        <li>
                                            <span className="info-label">Rut:</span>{" "}
                                            {studentInfo.apfinancial_rut_financial}
                                        </li>
                                        <li>
                                            <span className="info-label">Nombre:</span>{" "}
                                            {studentInfo.apfinancial_name}
                                        </li>
                                        <li>
                                            <span className="info-label">Apellido:</span>{" "}
                                            {studentInfo.apfinancial_last_name}
                                        </li>
                                        <li>
                                            <span className="info-label">Número de Contacto:</span>{" "}
                                            {studentInfo.apfinancial_contact_number}
                                        </li>
                                        <li>
                                            <span className="info-label">Dirección:</span>{" "}
                                            {studentInfo.apfinancial_address}
                                        </li>
                                        <li>
                                            <span className="info-label">Correo:</span>{" "}
                                            {studentInfo.apfinancial_email}
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-6">
                                    <h2 className="info-heading">Apoderado Académico</h2>
                                    <ul>
                                        <li>
                                            <span className="info-label">Rut:</span>{" "}
                                            {studentInfo.apacademic_rut_academic}
                                        </li>
                                        <li>
                                            <span className="info-label">Nombre:</span>{" "}
                                            {studentInfo.apacademic_name}
                                        </li>
                                        <li>
                                            <span className="info-label">Apellido:</span>{" "}
                                            {studentInfo.apacademic_last_name}
                                        </li>
                                        <li>
                                            <span className="info-label">Número de Contacto:</span>{" "}
                                            {studentInfo.apacademic_contact_number}
                                        </li>
                                        <li>
                                            <span className="info-label">Dirección:</span>{" "}
                                            {studentInfo.apacademic_address}
                                        </li>
                                        <li>
                                            <span className="info-label">Correo:</span>{" "}
                                            {studentInfo.apacademic_email}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
