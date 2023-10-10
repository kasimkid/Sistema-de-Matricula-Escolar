import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardStudent = () => {
  const { store, actions } = useContext(Context)

  // const {rut, name, last_name} = store.student
  // console.log(store.student)

  useEffect(() => {
    actions.getStudents();
  }, []);

  return (
    <>
      <div>
        {store.students.map((student) => (
          <section className="col-12 my-3 col-lg-3 col-md-4 col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title" key={student.id}><Link to={`/formstudent/${student.id}`}>
                  {`${student.name} ${student.last_name} ${student.rut}`}
                </Link></h5>
                <h6 className="card-subtitle mb-2 text-body-secondary"><Link to={`/formfinanciero/${student.apfinancial_id}`}>{`${student.apfinancial_name} ${student.apfinancial_last_name}`}</Link></h6>
                <h6 className="card-subtitle mb-2 text-body-secondary"><Link to={`/formacademico/${student.apacademic_id}`}>{`${student.apacademic_name} ${student.apacademic_last_name}`}</Link></h6>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};
