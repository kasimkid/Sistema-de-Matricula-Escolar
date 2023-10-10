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
const urlLoginUser = process.env.REACT_APP_API_URL_LOGIN_USER;

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
      dataUser:[]

    },
    actions: {
      // POST
      createAccount: async (info) => {
        fetch(`${url}${urlCreateAccount}`, {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json",
          }
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
      login: (info, navigate) => {
        fetch(`${url}${urlLoginUser}`, {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then((data) => {
          if(!data.ok){
            throw new Error('Error al iniciar sesion');
          }
          return data.json();
        })
        .then((resp) => {
          console.log(resp);
          localStorage.setItem("logstudent", JSON.stringify(resp));
          navigate("/formstudent")
        })
        .catch((error) => {
          console.log("Error", error)
        });
      },
      logout: () => {
        localStorage.removeItem("logstudent")
      },

      login_admin: (info) => {
        console.log('info', info)
        fetch(`${url}${urlLoginAdmin}`, {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then((data) => {
          if(!data.ok){
            throw new Error('Error al iniciar sesion');
          }
          return data.json();
        })
        .then((resp) => {
          console.log(resp);
        })
        .catch((error) => {
          console.log("Error", error)
        });
      },

      login: async (info) => {
        const request = {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json"
          }
          
        }
        try{
          const resp = await fetch("http://localhost:8080/login", request )
          const data = await resp.json()
          localStorage.setItem("dataUser", JSON.stringify(data))
          setStore({ dataUser: data });
          console.log(data)
          return data
        }catch (error){
          console.log(error)
        }
     
          
        // .then((data) => {
        //   if(!data.ok){
        //     throw new Error('Error al iniciar sesion');
        //   }
        //   return data.json();
        // })
        // .then((resp) => {
        //   console.log(resp);
        //   localStorage.setItem("logstudent", JSON.stringify(resp));
        // })
        // .catch((error) => {
        //   console.log("Error", error)
        // });
      },

      formStudents: async (info) => {
        console.log(info)
        const store = getStore()
        const token = localStorage.getItem("logstudent");
        const request = {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}` 
            // Authorization: "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5Njg3MzY1OCwianRpIjoiNDYxZGJhYjItMzAwMS00YTA1LWIwYTQtNjY0YmVmMmIxNjRlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjI2ODcwMjc4LU0iLCJuYmYiOjE2OTY4NzM2NTgsImV4cCI6MTY5Njg3NDU1OH0.xtfK-Z4DCUSHC8qpK1V3q0emAI1XsOFLhFgYBFS_RBw"
           
          },
        }
        const resp = await fetch(`${url}${urlUpdateStudent}`, request)
        const data = await resp.json()
        console.log(data)
        return data
          // .then((data) => {
          //   if (!data.ok) {
          //       throw new Error('Error al crear al estudiante');
          //     }
          //   })
          // .then((resp) => {
          //   setStore({ students: [...store.students, resp] });
          //   console.log(resp);
          //   return resp.json();
          // })
          // .catch((error) => {
          //   console.log("Error", error)
          // });
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
    },
  };
};

export default getState;
