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
            // <div>
            //   {store.students.map((student) => (
            //     <section className="col-12 my-3 col-lg-3 col-md-4 col-sm-6">
            //       <div className="card">
            //         <div className="card-body">
            //           <h5 className="card-title" key={student.id}><Link to={`/formstudent/${student.id}`}>
            //             {`${student.name} ${student.last_name} ${student.rut}`}
            //           </Link></h5>
            //           <h6 className="card-subtitle mb-2 text-body-secondary"><Link to={`/formfinanciero/${student.apfinancial_id}`}>{`${student.apfinancial_name} ${student.apfinancial_last_name}`}</Link></h6>
            //           <h6 className="card-subtitle mb-2 text-body-secondary"><Link to={`/formacademico/${student.apacademic_id}`}>{`${student.apacademic_name} ${student.apacademic_last_name}`}</Link></h6>
            //         </div>
            //       </div>
            //     </section>
            //   ))}
            //   </div>
          )}
          {showCourses && store.courses.length > 0 && <h2>Lista de Cursos</h2>}
          {showCourses && (
            <ul className="list-group">
              {store.courses.map((course) => (
                <li
                  className="list-group-item"
                  key={course.id}
                >{`${course.course}`}</li>
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
