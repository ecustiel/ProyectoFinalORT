import React from "react";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";

export default function FirstStep() {
  return (
    <div>
      <Form className="mh-100">
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>
            <b>Titulo de la Publicacion</b>
          </Form.Label>
          <Form.Control placeholder="Inserte Titulo" />
        </Form.Group>

        <div className="mb-3 bg-secondary bg-opacity-50 border border-dark border-1 rounded">
          <span className="mb-3 p-4">
            <b>Definicion de Temporadas:</b>
          </span>

          <div className="ps-5">
            <p>
              <b>Alta:</b> Diciembre, Enero, Febrero, Semana Santa, Semana
              Carnaval
            </p>
            <p>
              <b>Media:</b> Marzo, Vacaciones Julio
            </p>
            <p>
              <b>Baja:</b> Resto del Año
            </p>
          </div>
        </div>
        <hr />

        <Form.Group controlId="">
          <Row>
            <Col className="justify-content-center">
              <Form.Select
                aria-label="Default select example"
                className="w-50 mx-auto"
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
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId="" className="mt-2">
          <Row>
            <Col className="justify-content-center">
              <Form.Select
                aria-label="Default select example"
                className="w-50 mx-auto"
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
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId="" className="mt-2">
          <Row>
            <Col className="justify-content-center">
              <Form.Select
                aria-label="Default select example"
                className="w-50 mx-auto"
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
