import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="container navbar navbar-expand-lg navbar-light menu-color mt-4">
        <div className="container ">
          <h4>Sistema de Matricula Escolar</h4>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
    
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Menú
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to="/" className="links">
                    <li>Inicio</li>
                  </Link>
                  <Link to="/formfinanciero" className="links">
                    <li>Financiero</li>
                  </Link>
                  <Link to="/formacademico" className="links">
                    <li>Académico</li>
                  </Link>
                  <Link to="/" className="links">
                    <li>Mis Datos</li>
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
