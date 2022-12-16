import React from "react";
import {
  Button,
  Col,
  Form,
  Row,
  FloatingLabel,
  InputGroup,
} from "react-bootstrap";

export default function SixthStage() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>
            <b>6 - Descripcion de la Propiedad</b>
          </Form.Label>
        </Form.Group>
        <FloatingLabel controlId="pubDescription">
          <Form.Control
            as="textarea"
            placeholder="Describa su Propiedad"
            style={{ height: "450px" }}
          />
        </FloatingLabel>
      </Form>
    </>
  );
}
