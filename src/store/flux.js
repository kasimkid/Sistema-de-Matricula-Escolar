// import { clippingParents } from "@popperjs/core";
const url = process.env.REACT_APP_API_URL;
const urlCreateAccount = process.env.REACT_APP_API_URL_CREATE_ACCOUNT;
// const urlCreateCourse = process.env.REACT_APP_API_URL_CREATE_COURSE;
const urlUpdateStudent = process.env.REACT_APP_API_URL_UPDATE_STUDENT;
//const urlEditStudent = process.env.REACT_APP_API_URL_EDIT_STUDENT; 
const urlUpdateFinancial = process.env.REACT_APP_API_URL_UPDATE_FINANCIAL;
// const urlEditFinalcial = process.env.REACT_APP_API_URL_EDIT_FINANCIAL;
const urlUpdateAcademic = process.env.REACT_APP_API_URL_UPDATE_ACADEMIC;
// const urlEditAcademic = process.env.REACT_APP_API_URL_EDIT_ACADEMIC;
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
      course: ""
    },
    actions: {
      createAccount: async (info) => {
        fetch(`${url}${urlCreateAccount}`, {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((data) => data.json())
          .then((resp) => console.log(resp))
          .catch((error) => ("Error:", error))
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
            return data.json();
          })
          .then((resp) => {
            setStore({ students: [...store.students, resp] });
            console.log(resp);
          })
          .catch((error) => ("Error:", error))
      },

      formFinancial: (info) => {
        console.log(info)
        const store = getStore()
        console.log(`${url}${urlUpdateFinancial}`)
        fetch(`${url}${urlUpdateFinancial}`, {
          method: "POST",  // or 'PUT'
          body: JSON.stringify(info),
          headers: {
            "Content-type": "application/json"
          },
        })
          .then((data) => {
            return data.json();
          })
          .then((resp) => {
            setStore({ financials: [...store.financials, resp] });
            console.log(resp)
          })
          .catch((error) => ("Error:", error))
      },

      formAcademic: (info) => {
        console.log(info)
        const store = getStore()
        fetch(`${url}${urlUpdateAcademic}`, {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-type": "application/json"
          },
        })
          .then((data) => {
            return data.json();
          })
          .then((resp) => {
            setStore({ academics: [...store.academics, resp] });
            console.log(resp);
          })
          .catch((error) => ("Error", error))
      },
//        GETS
      getStudents: () => {
        console.log(`${url}${urlGetStudents}`)
        fetch(`${url}${urlGetStudents}`)
          .then((data) => {
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

      getCourse: () => {
        console.log(`${url}${urlGetCourses}`)
        fetch(`${url}${urlGetCourses}`)
          .then((data) => {
            return data.json();
          })
          .then((resp) => {
            setStore({ courses: resp });
            console.log('Courses from API:', resp);
          })
          .catch(error => {
            console.error("Error:", error)
          });
      }
    },
  };
};

export default getState;
