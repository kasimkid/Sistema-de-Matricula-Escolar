import React, { useState, useEffect, useContext } from 'react';
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

  return (
    <div>
      <button onClick={toggleStudents}>Estudiantes</button>
      {showStudents && store.students.length > 0 && <h2>Lista de Estudiantes</h2>}
      {showStudents && (
        <ul>
          {store.students.map(student => (
            <li key={student.id}>
              <Link to={`/formstudent/${student.id}`}>
                {`${student.id} ${student.name} ${student.last_name} ${student.rut}`}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <button onClick={toggleCourses}>Cursos</button>
      {showCourses && store.courses.length > 0 && <h2>Lista de Cursos</h2>}
      {showCourses && (
        <ul>
          {store.courses.map(course => (
            <li key={course.index}>
              {`${course.course}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
