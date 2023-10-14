import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../styles/card.css";

export const CardStudent = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getStudents();
  }, []);

  return (
    <div className="card-container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {store.students.map((student) => (
          <div className="col" key={student.id}>
            <div className="card">
              <img src={`${student.url_img}`} className="card-img-top" alt="Card" />
              <div className="card-body">
                <h3 className="card-title">Alumno</h3>
                <h4 className="card-title" key={student.id}>
                  <Link to={`/formstudent/${student.id}`}>
                    {`${student.name} ${student.last_name} ${student.rut}`}
                  </Link>
                </h4>
                <h3 className="card-title">Apoderado Financiero</h3>
                <h4 className="card-subtitle mb-2 text-body-secondary">
                  <Link to={`/formfinanciero/${student.apfinancial_id}`}>
                    {`${student.apfinancial_name} ${student.apfinancial_last_name}`}
                  </Link>
                </h4>
                <h3 className="card-title">Apoderado Academico</h3>
                <h4 className="card-subtitle mb-2 text-body-secondary">
                  <Link to={`/formacademico/${student.apacademic_id}`}>
                    {`${student.apacademic_name} ${student.apacademic_last_name}`}
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
