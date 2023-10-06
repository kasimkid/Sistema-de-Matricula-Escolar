import injectContext from "./store/appContext";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import ScrollToTop from './components/ScrollToTop';

import "../src/styles/App.css"
import { Navbar } from './components/Navbar';
import { Home } from './views/Home';
import { FormStudent } from "./views/Form-student"
import { FormFinancial } from './views/formulariofinanciero';
import { FormAcademic } from './views/formularioacademico';
import { Admin } from './views/admin';
import { HistoryStudent } from './views/historialestudiante';
import { ProtectedRoute } from "./components/ProtectedRoute";



function App() {
  const [user, setUser] = useState(null)
  const login = () =>
    setUser({
      id: 1,
      name: "seba",
      roll: "admin"
    });
  const logout = () => setUser(null);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Navbar />
          {user ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <button onClick={login}>Login</button>
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoute isAllowed={!!user} />}>
              <Route path="/formstudent" element={<FormStudent />} />
              <Route path="/formstudent/:id" element={<FormStudent />} />
              <Route path="/formfinanciero" element={<FormFinancial />} />
              <Route path="/formfinanciero/:id" element={<FormFinancial />} />
              <Route path="/formacademico" element={<FormAcademic />} />
              <Route path="/formacademico/:id" element={<FormAcademic />} />
            </Route>
            <Route path="/cursos" element={<HistoryStudent />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute redirectTo="/" isAllowed={!!user && user.roll.includes("admin")}>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
