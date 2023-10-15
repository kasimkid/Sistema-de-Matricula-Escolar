import injectContext from "./store/appContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import "../src/styles/app.css"
import { Navbar } from './components/Navbar';
import { Home } from './views/Home';
import { FormStudent } from "./views/Form-student"
import { FormFinancial } from './views/formulariofinanciero';
import { FormAcademic } from './views/formularioacademico';
import { Admin } from './views/admin';
import { Student } from "./views/Students";
import { HistoryStudent } from './views/historialestudiante';
import RutaProtegida from "./views/RutaProtegida";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student/:id" element={<Student />} />

            {/* Ruta Privada */}
            <Route path="/my-app" element={<RutaProtegida />}>
              <Route path="/my-app/admin" element={<Admin />} />
              <Route path="/my-app/formstudent" element={<FormStudent />} />
              <Route path="/my-app/formfinanciero" element={<FormFinancial />} />
              <Route path="/my-app/formacademico" element={<FormAcademic />} />
            </Route>

            <Route path="/formstudent/:id" element={<FormStudent />} />
            <Route path="/formacademico/:id" element={<FormAcademic />} />
            <Route path="/formfinanciero/:id" element={<FormFinancial />} />
            <Route path="/cursos" element={<HistoryStudent />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
