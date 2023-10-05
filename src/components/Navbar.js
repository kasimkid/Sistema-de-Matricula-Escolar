import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav class="container navbar navbar-expand-lg navbar-light menu-color mt-4">
        <div class="container ">
          <h4>Sistema de Matricula Escolar</h4>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav">
    
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Menú
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to="/" className="links">
                    <li>Inicio</li>
                  </Link>
                  <Link to="/formacademico" className="links">
                    <li>Académico</li>
                  </Link>
                  <Link to="/formfinanciero" className="links">
                    <li>Financiero</li>
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

      {/* <nav className=" container nav-color navbar navbar-expand-lg">
        <div className="container">
          <img src="" className="navbar-brand "></img>
          <h4>Sistema de Matricula Escolar</h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="dopdown"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button
                  className="btn btn- ligth dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </button>
                <ul className="dropdown-menu">
                  <Link to="/">
                    <li>Inicio</li>
                  </Link>
                  <Link to="/formacademico">
                    <li>Académico</li>
                  </Link>
                  <Link to="/formfinanciero">
                    <li>Financiero</li>
                  </Link>
                  <Link to="/">
                    <li>Mis Datos</li>
                  </Link>

                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
};
