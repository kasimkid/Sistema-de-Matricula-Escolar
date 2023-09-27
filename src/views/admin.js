import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';

export const Admin = () => {
  const { store, actions } = useContext(Context)

  useEffect(() => {
    actions.getStudents();
    actions.getCourse();
  }, [])
  return (
    <div>
      <h2>Lista de Estudiantes</h2>
      <ul>
        {store.students.map(student => (
          <li key={student.rut}>
            {`${student.name} ${student.last_name} - Rut: ${student.rut}`}
          </li>
        ))}
      </ul>
      <h2>Lista de Cursos</h2>
      <ul>
        {store.courses.map(course => (
          <li key={course.rut}>
            {`${course.course}`}
          </li>
        ))}
      </ul>
    </div>
  )
}

