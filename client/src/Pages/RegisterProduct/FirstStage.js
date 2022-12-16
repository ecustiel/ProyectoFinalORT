import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import { AuthContext } from "../../Authentication/AuthProvider";

export default function FirstStep() {
  const probandoDatos = useContext(AuthContext);
  console.log(probandoDatos);
  return (
    <div>
      <Form className="mh-100">
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>
            <strong>Titulo de la Publicacion</strong>
          </Form.Label>
          <Form.Control name="title" placeholder="Inserte Titulo" />
        </Form.Group>

        <div className="mb-3 bg-secondary bg-opacity-50 border border-dark border-1 rounded">
          <span className="mb-3 p-4">
            <strong>Definicion de Temporadas:</strong>
          </span>

          <div className="ps-5">
            <p>
              <strong>Alta:</strong> Diciembre, Enero, Febrero, Semana Santa,
              Semana Carnaval
            </p>
            <p>
              <strong>Media:</strong> Marzo, Vacaciones Julio
            </p>
            <p>
              <strong>Baja:</strong> Resto del Año
            </p>
          </div>
        </div>
        <hr />

        <Form.Group controlId="Primero">
          <Row>
            <Col className="justify-content-center">
              <Form.Select
                aria-label="Default select example"
                className="w-50 mx-auto"
                name="temp1"
              >
                <option>Seleccione Temporada</option>
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
              </Form.Select>
            </Col>
            <Col>
              <InputGroup className="pe-5 w-75">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  placeholder="Prexio x Dia"
                  controlId="PricePerDay1"
                  aria-label="Amount (to the nearest dollar)"
                  name="prec1"
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId="Segundo" className="mt-2">
          <Row>
            <Col className="justify-content-center">
              <Form.Select
                aria-label="Default select example"
                className="w-50 mx-auto"
                name="temp2"
              >
                <option>Seleccione Temporada</option>
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
              </Form.Select>
            </Col>
            <Col>
              <InputGroup className="pe-5 w-75">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  placeholder="Prexio x Dia"
                  controlId="PricePerDay2"
                  aria-label="Amount (to the nearest dollar)"
                  name="prec2"
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId="Tercero" className="mt-2">
          <Row>
            <Col className="justify-content-center">
              <Form.Select
                aria-label="Default select example"
                className="w-50 mx-auto"
                name="temp3"
              >
                <option>Seleccione Temporada</option>
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
              </Form.Select>
            </Col>
            <Col>
              <InputGroup className="pe-5 w-75">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  placeholder="Prexio x Dia"
                  controlId="PricePerDay3"
                  aria-label="Amount (to the nearest dollar)"
                  name="prec3"
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
}
