import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const CardStudent = () => {
  const {store, actions} = useContext(Context)

  // const {rut, name, last_name} = store.student
  // console.log(store.student)

  useEffect(() => {
    actions.getStudents();
  }, []);
  
  return (
    <>
    {store.students.map((student) => (
         <section className="col-12 my-3 col-lg-3 col-md-4 col-sm-6">
         <div className="card">
           <div className="card-body">
             <h5 className="card-title">{`${student.name} ${student.last_name} ${student.rut}`}</h5>
             <h6 className="card-subtitle mb-2 text-body-secondary">{`${student.apfinancial_name} ${student.apfinancial_last_name}`}</h6>
             <h5 className="card-text">{`${student.apacademic_name} ${student.apacademic_last_name}`}</h5>
           </div>
         </div>
         </section>
      // <li className="list-group-item" key={student.id}>
      //   <Link to={`/formstudent/${student.id}`}>
      //     {`${student.name} ${student.last_name} ${student.rut}`}
      //   </Link>
      //   <div>
      //     <strong>Apoderado Financiero:</strong>{" "}
      //     {student.apfinancial_name} {student.apfinancial_last_name}
      //   </div>
      //   <div>
      //     <strong>Apoderado Académico:</strong>{" "}
      //     {student.apacademic_name} {student.apacademic_last_name}
      //   </div>
      // </li>
    ))}

 
    </>
  );
};
