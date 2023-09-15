import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import '../styles/Home.css';

export const Login = () => {
  return (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Ingresa tu Rut</Form.Label>
            <Form.Control type="text" placeholder="Rut" required="value" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Password" required="value" />
          </Form.Group>
          <Button variant="primary" type="submit" className="text-align-center">
            Ingresar
          </Button>
        </Form>
  );
};