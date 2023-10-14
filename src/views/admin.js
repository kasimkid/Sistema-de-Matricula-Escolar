import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { NewAcount } from "../components/NewAcount";
import "../styles/admin.css";
import { CardStudent } from "../components/CardStudent";


export const Admin = () => {
  const { store, actions } = useContext(Context);
  const [showStudents, setShowStudents] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showNewAccount, setShowNewAccount] = useState(false);

  const toggleStudents = () => {
    if (!showStudents) {
      actions.getStudents();
    }
    setShowStudents(!showStudents);
    setShowCourses(false);
    setShowNewAccount(false);
  };

  const toggleCourses = () => {
    if (!showCourses) {
      actions.getCourse();
    }
    setShowCourses(!showCourses);
    setShowStudents(false);
    setShowNewAccount(false);
  };

  const toggleNewAccount = () => {
    setShowNewAccount(!showNewAccount);
    setShowStudents(false);
    setShowCourses(false);
  };

  return (
    <>
    
    <div className="container view-admin">
      <div className="row p-4">
        <div className="col-2">
          <div className="d-flex flex-column ">
            <button
              type="button"
              className="btn btn-secondary mb-2"
              onClick={toggleNewAccount}
            >
              Crear Cuentas
            </button>
            <button
              type="button"
              className="btn btn-secondary mb-2"
              onClick={toggleStudents}
            >
              Estudiantes
            </button>
            <button
              type="button"
              className="btn btn-secondary mb-2"
              onClick={toggleCourses}
            >
              Cursos
            </button>

          </div>
        </div>
        <div className="col-10">


          {showStudents && (
            <CardStudent/>

          )}
          {showCourses && store.courses.length > 0 && <h2>Lista de Cursos</h2>}
          {showCourses && (
            <ul className="list-group">
              {store.courses.map((course) => (
                <li
                  className="list-group-item"
                  key={course.id}
                >{`${course.course_name}: ${course.id.length}/30`}</li>
              ))}
            </ul>
          )}

          {showNewAccount && <NewAcount />}{" "}
          {/* Renderiza NewAcount si showNewAccount es true */}
        </div>
      </div>
    </div>
    </>
  );
};
