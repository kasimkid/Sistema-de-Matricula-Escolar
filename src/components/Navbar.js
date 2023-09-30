import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className=" container nav-color navbar navbar-expand-lg mt-2">
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
                <li>Académico</li>
                <li>Financiero</li>
                <li>Mis Datos</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
