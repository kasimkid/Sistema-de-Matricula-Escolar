import React from "react";
import "../styles/Navbar.css";

export const MenuNavbar = () => {
  return (
    <nav className=" container  navbar navbar-expand-lg bg-body-tertiary mt-2">
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
    // <Navbar className=" container mt-2 menu bg-info">
    //   <Container>
    //     <image src="" className="logo mx-3">Logo</image>
    //     <Navbar.Brand>Sistema de Matricula Escolar</Navbar.Brand>
    //     {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
    //         <NavDropdown title="Menu" id="basic-nav-dropdown" classNameName="dropdown me-3">
    //           <NavDropdown.Item href="#">Datos Apoderado</NavDropdown.Item>
    //           <NavDropdown.Item href="#">
    //           Datos Apoderado Académico
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#">Mis Datos</NavDropdown.Item>
    //         </NavDropdown>
    //   </Container>
    // </Navbar>
  );
};
