import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export const Admin = () => {
  const { store, actions } = useContext(Context);
  const [showStudents, setShowStudents] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  const toggleStudents = () => {
    if (!showStudents) {
      actions.getStudents();
    }
    setShowStudents(!showStudents);
    setShowCourses(false);
  };

  const toggleCourses = () => {
    if (!showCourses) {
      actions.getCourse();
    }
    setShowCourses(!showCourses);
    setShowStudents(false);
  };

  // useEffect(() => {
  //   if (showStudents) {
  //     actions.getStudents();
  //   } else if (showCourses) {
  //     actions.getCourse();
  //   }
  // }, [showStudents, showCourses, actions]);
  console.log(store.students)
  return (
    <div>
      <button onClick={toggleStudents}>Estudiantes</button>
      {showStudents && store.students.length > 0 && <h2>Lista de Estudiantes</h2>}
      {showStudents && (
        <ul>
          {store.students.map(student => (
            <li key={student.id}>
              {student.name}
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

      <button onClick={toggleCourses}>Cursos</button>
      {showCourses && store.courses.length > 0 && <h2>Lista de Cursos</h2>}
      {showCourses && (
        <ul>
          {store.courses.map(course => (
            <li key={course.id}>
              {`${course.course}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
