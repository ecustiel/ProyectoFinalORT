import { GoogleMap } from "@react-google-maps/api";
import { useState, useRef } from "react";
import {
  Button,
  Col,
  Form,
  Row,
  InputGroup,
  FormGroup,
  FormControl,
} from "react-bootstrap";
import useFormContext from "../../Hooks/useFormContext";
import Home from "../RegisterProduct/MapaDirecciones";
import { Autocomplete } from "@react-google-maps/api";

export default function SecondStage() {
  const { publication, handleChange } = useFormContext();

  return (
    <div>
      <Form>
        <Form.Group className="mb-3 mh-100" controlId="cantHuespedes">
          <Form.Label className="w-100">
            <b>2 - Datos Generales </b>
          </Form.Label>
          <Form.Text>Cantidad Maxima de Huespedes</Form.Text>
          <Form.Select
            aria-label="Default select example"
            className="w-50 "
            name="cantHuespedes"
            value={publication.cantHuespedes}
            onChange={handleChange}
          >
            <option value="0">Cantidad de Huespedes</option>
            <option value="1">1 Huesped</option>
            <option value="2">2 Huespedes</option>
            <option value="3">3 Huespedes</option>
            <option value="4">4 Huespedes</option>
            <option value="5">5 Huespedes</option>
            <option value="6">6 Huespedes</option>
            <option value="7">7 Huespedes</option>
            <option value="8">8 Huespedes</option>
            <option value="9">9 Huespedes</option>
            <option value="10">10 Huespedes</option>
            <option value="SR">Sin Restriccion</option>
          </Form.Select>

          <Form.Text>Tipo de Propiedad</Form.Text>
          <Form.Select
            aria-label="Default select example"
            className="w-50 "
            name="tipoPropiedad"
            value={publication.tipoPropiedad}
            onChange={handleChange}
          >
            <option>Tipo Propiedad</option>
            <option value="house">Casa</option>
            <option value="apto">Apartamento</option>
            <option value="cabin">Cabaña</option>
            <option value="smlFarm">Estancia</option>
          </Form.Select>
        </Form.Group>

        <FormGroup>
          <hr />
          <Home />
        </FormGroup>
      </Form>
    </div>
  );
}
