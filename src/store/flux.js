// import { clippingParents } from "@popperjs/core";
const url = process.env.REACT_APP_API_URL;
const urlCreateAccount = process.env.REACT_APP_API_URL_CREATE_ACCOUNT;
// const urlCreateCourse = process.env.REACT_APP_API_URL_CREATE_COURSE;
const urlUpdateStudent = process.env.REACT_APP_API_URL_UPDATE_STUDENT;
// const urlEditStudent = process.env.REACT_APP_API_URL_EDIT_STUDENT;
// const urlUpdateFinancial = process.env.REACT_APP_API_URL_UPDATE_FINALCIAL;
// const urlEditFinalcial = process.env.REACT_APP_API_URL_EDIT_FINANCIAL;
// const urlUpdateAcademic = process.env.REACT_APP_API_URL_UPDATE_ACADEMIC;
// const urlEditAcademic = process.env.REACT_APP_API_URL_EDIT_ACADEMIC;
// const urlGetStudents = process.env.REACT_APP_API_URL_GET_STUDENT;
// const urlGetCourses = process.env.REACT_APP_API_URL_GET_COURSES;

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      students: [],
      student: "",
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
          .catch((error) => ("Error:", error));
      },

      formStudents: (info) => {
        const store = getStore()
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
          .catch((error) => ("Error:", error));
      },
    },
  };
};

export default getState;
