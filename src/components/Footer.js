import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
<footer className="pt-5">
    <div className="row redes">
        <div className="col-lg-12 icons">
        <i className="fa-solid fa-phone" style={{ color: "black" }}> Telefonos</i>
        <Link to="http://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram" style={{color: "black"}}> Instagram</i></Link>
        <Link to="http://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook" style={{color: "black"}}> Facebook</i></Link>
        <Link to="http://www.gmail.com" target="_blank"><i className="fa-solid fa-envelope" style={{color: "black"}}> Email</i></Link>
        </div>
    </div>
</footer>

)};