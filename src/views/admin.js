import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import '../styles/admin.css';
import { NewAcount } from '../components/NewAcount';

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
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 sidebar">
          <div className="d-flex flex-column">
            <button type="button" className="btn btn-secondary mb-2" onClick={toggleStudents}>
              Estudiantes
            </button>
            <button type="button" className="btn btn-secondary mb-2" onClick={toggleCourses}>
              Cursos
            </button>
            <button type="button" className="btn btn-secondary mb-2" onClick={toggleNewAccount}>
              Crear Cuentas
            </button>
          </div>
        </div>
        <div className="col-9 content">
          {showStudents && store.students.length > 0 && <h2>Lista de Estudiantes</h2>}
          {showStudents && (
            <ul className="list-group">
              {store.students.map(student => (
                <li className="list-group-item" key={student.id}>
                  <Link to={`/formstudent/${student.id}`}>
                    {`${student.id} ${student.name} ${student.last_name} ${student.rut}`}
                  </Link>
                  <div>
                    <strong>Apoderado Financiero:</strong> {student.apfinancial_name} {student.apfinancial_last_name}
                  </div>
                  <div>
                    <strong>Apoderado Académico:</strong> {student.apacademic_name} {student.apacademic_last_name}
                  </div>
                </li>
              ))}
            </ul>
          )}

          {showCourses && store.courses.length > 0 && <h2>Lista de Cursos</h2>}
          {showCourses && (
            <ul className="list-group">
              {store.courses.map((course) => (
                <li className="list-group-item" key={course.id}>{`${course.course}`}</li>
              ))}
            </ul>
          )}

          {showNewAccount && <NewAcount />} {/* Renderiza NewAcount si showNewAccount es true */}
        </div>
      </div>
    </div>
  );
};