import React from "react";
import "../styles/footer.css";

export const Footer = () => {
  return (
<footer className="pt-5">
    <div className="row redes">
        <div className="col-lg-12 icons">
        <i className="fa-solid fa-phone" style={{ color: "black" }}> Telefonos</i>
        <i class="fa-brands fa-instagram" style={{color: "black"}}> Instagram</i>
        <i class="fa-brands fa-facebook" style={{color: "black"}}> Facebook</i>
        <i class="fa-solid fa-envelope" style={{color: "black"}}> Email</i>
        </div>
    </div>
</footer>

)};