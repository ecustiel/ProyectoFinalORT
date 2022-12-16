import React from "react";
import ImgUploader from "./ImgUploader";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";

export default function FifthStage() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>
            <b>5 - Gestion de Imagenes</b>
          </Form.Label>
        </Form.Group>
        <ImgUploader id="imgToPublication" />
        <hr />
        <div>
          <Form.Label>
            <b>Extras - (Inserte un Link de Youtube si lo desea)</b>
          </Form.Label>
          <Form.Control
            id="inputYoutube"
            aria-describedby="formDesc"
            className="w-50"
          />
        </div>
      </Form>
    </>
  );
}
