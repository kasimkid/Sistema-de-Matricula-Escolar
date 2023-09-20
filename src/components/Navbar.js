import React from "react";
import "../styles/navbar.css";

export const Navbar = () => {

  return (
    <nav className=" container nav-color navbar navbar-expand-lg mt-2">
      <div className="container-fluid">
        <image src="" className="navbar-brand">
          Logo
        </image>
        <h4>Sistema de Matricula Escolar</h4>
        <button
          className="navbar-toggler"
          disabled="true"
          type="button"
          data-bs-toggle="dopdown"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
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
                <li>Apoderado Académico</li>
                <li>Apoderado Financiero</li>
                <li>Mis Datos</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};