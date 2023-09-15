import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import '../styles/Home.css';

export const Home = () => {
  return (
    <div className="container">
      <section className="views mt-2">
        <div className="box1 mb-2">Box1</div>
        <div className="box2">Box2</div>
        <div className="box-Form mt-2">
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
        </div>
      </section>
    </div>
  );
};
