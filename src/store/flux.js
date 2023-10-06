// import { clippingParents } from "@popperjs/core";
const url = process.env.REACT_APP_API_URL;
const urlCreateAccount = process.env.REACT_APP_API_URL_CREATE_ACCOUNT;
const urlUpdateStudent = process.env.REACT_APP_API_URL_UPDATE_STUDENT;
const urlEditStudent = process.env.REACT_APP_API_URL_EDIT_STUDENT;
const urlUpdateFinancial = process.env.REACT_APP_API_URL_UPDATE_FINANCIAL;
const urlEditFinalcial = process.env.REACT_APP_API_URL_EDIT_FINANCIAL;
const urlUpdateAcademic = process.env.REACT_APP_API_URL_UPDATE_ACADEMIC;
const urlEditAcademic = process.env.REACT_APP_API_URL_EDIT_ACADEMIC;
const urlGetStudents = process.env.REACT_APP_API_URL_GET_STUDENT;
const urlGetCourses = process.env.REACT_APP_API_URL_GET_COURSE;

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      students: [],
      student: "",
      financials: [],
      financial: "",
      academics: [],
      academic: "",
      courses: [],
      course: "",

    },
    actions: {
      // POST
      createAccount: async (info) => {
        fetch(`${url}${urlCreateAccount}`, {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((data) => {
            if (!data.ok) {
              throw new Error('Error al crear cuenta');
            }
            return data.json();
          })
          .then((resp) => console.log(resp))
          .catch((error) => {
            console.log("Error", error)
          });
      },

      formStudents: (info) => {
        console.log(info)
        const store = getStore()
        console.log(`${url}${urlUpdateStudent}`)
        fetch(`${url}${urlUpdateStudent}`, {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((data) => {
            if (!data.ok) {
                throw new Error('Error al crear al estudiante');
              }
              return data.json();
          })
          .then((resp) => {
            setStore({ students: [...store.students, resp] });
            console.log(resp);
          })
          .catch((error) => {
            console.log("Error", error)
          });
      },

      formFinancial: (info) => {
        console.log(info)
        const store = getStore()
        console.log(`${url}${urlUpdateFinancial}`)
        fetch(`${url}${urlUpdateFinancial}`, {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-type": "application/json"
          },
        })
          .then((data) => {
            if (!data.ok) {
              throw new Error('Error al crear apoderado financiero');
            }
            return data.json();
          })
          .then((resp) => {
            setStore({ financials: [...store.financials, resp] });
            console.log(resp)
          })
          .catch((error) => {
            console.log("Error", error)
          });
      },

      formAcademic: (info) => {
        console.log(info)
        const store = getStore()
        console.log(`${url}${urlUpdateAcademic}`)
        fetch(`${url}${urlUpdateAcademic}`, {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-type": "application/json"
          },
        })
          .then((data) => {
            if (!data.ok) {
              throw new Error('Error al crear apoderado academico');
            }
            return data.json();
          })
          .then((resp) => {
            setStore({ academics: [...store.academics, resp] });
            console.log(resp);
          })
          .catch((error) => {
            console.log("Error", error)
          });
      },

      // PUTS
      editStudent: (id, info) => {
        console.log(`${url}${urlEditStudent}/${id}`)
        fetch(`${url}${urlEditStudent}/${id}`, {
          method: "PUT",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then((data) => {
            if (!data.ok) {
              throw new Error('Error al actualizar el estudiante');
            }
            return data.json();
          })
          .then((resp) => {
            console.log('Estudiante actualizado:', resp);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      },

      editFinancial: (id, info) => {
        console.log(`${url}${urlEditFinalcial}/${id}`)
        fetch(`${url}${urlEditFinalcial}/${id}`, {
          method: "PUT",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then((data) => {
            if (!data.ok) {
              throw new Error('Error al actualizar al apoderado financiero');
            }
            return data.json();
          })
          .then((resp) => {
            console.log('Apoderado Financiero actualizado', resp);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      },

      editAcademic: (id, info) => {
        console.log(`${url}${urlEditAcademic}/${id}`)
        fetch(`${url}${urlEditAcademic}/${id}`, {
          method: "PUT",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then((data) => {
            if (!data.ok) {
              throw new Error('Error al actualizar al apoderado academico');
            }
            return data.json();
          })
          .then((resp) => {
            console.log('Apoderado Academico actualizado', resp);
          })
          .catch((error) => {
            console.error('Error', error);
          })
      },

      // GETS all students
      getStudents: () => {
        console.log(`${url}${urlGetStudents}`)
        fetch(`${url}${urlGetStudents}`)
          .then((data) => {
            if (!data.ok) {
              throw new Error('Error al mostrar a los estudiantes');
            }
            return data.json();
          })
          .then((resp) => {
            setStore({ students: resp });
            console.log('Data from API:', resp);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      },

      //All Courses
      getCourse: () => {
        console.log(`${url}${urlGetCourses}`)
        fetch(`${url}${urlGetCourses}`)
          .then((data) => {
            if (!data.ok) {
              throw new Error('Error al mostrar los cursos');
            }
            return data.json();
          })
          .then((resp) => {
            setStore({ courses: resp });
            console.log('Courses from API:', resp);
          })
          .catch(error => {
            console.error("Error:", error)
          });
      },

      //=== Save data Students, Academic and Financial

      // dataStudent: (event) => {
      //   const store = getStore();
      //   setStore({
      //     data: {
      //       ...store.data,
      //       student: {
      //         ...store.data.student,
      //         [event.target.name]: event.target.value
      //       },
      //     },
      //   });
      //   console.log("students", store.data);
      // },

      // dataAcademic: (event) => {
      //   const store = getStore();
      //   setStore({
      //     data: {
      //       ...store.data,
      //       academic: {
      //         ...store.data.academic,
      //         [event.target.name]: event.target.value,
      //       },
      //     },
      //   });
      //   console.log("academic", store.data);
      // },

      // dataFinancial: (event) => {
      //   const store = getStore();
      //   setStore({
      //     data: {
      //       ...store.data,
      //       financial: {
      //         ...store.data.financial,
      //         [event.target.name]: event.target.value,
      //       },
      //     },
      //   });
      //   console.log("financial", store.data);
      // },

    },
  };
};

export default getState;
