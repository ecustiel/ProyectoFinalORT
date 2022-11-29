import React from "react";
import { Button, Col, Form, Row, InputGroup, Control } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, loveseat } from "@fortawesome/free-solid-svg-icons";

export default function ThirdStage() {
  return (
    <div>
      <Form className="mh-100">
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>
            <b>3 - Detalle de la Propiedad</b>
          </Form.Label>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBedroom">
          <Form.Label>
            <b>Dormitorios:</b>
          </Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="1"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="2"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="3"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="4 o +"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
            </div>
          ))}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBathroom">
          <Form.Label>
            <b>Baños:</b>
          </Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="1"
                name="group2"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="2"
                name="group2"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="3 o +"
                name="group2"
                type={type}
                id={`inline-${type}-1`}
              />
            </div>
          ))}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGaraje">
          <Form.Label>Garaje:</Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="1"
                name="group3"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="2 o +"
                name="group3"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSeaview">
          <Form.Label>
            <b>Vista al Mar:</b>
          </Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Si"
                name="group4"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="No"
                name="group4"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDistance">
          <Form.Label>
            <b>Distancia al Mar:</b>
          </Form.Label>
          <Form.Select aria-label="Default select example" className="w-50 ">
            <option>Sin Descripcion</option>
            <option value="100">100</option>
            <option value="250">250</option>
            <option value="500">500</option>
            <option value="750">750</option>
            <option value="1000">1000 o +</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDesc">
          <Form.Label>
            <b>Camas:</b>
          </Form.Label>
          <div className="row">
            <div className="col-2">
              <Form.Label htmlFor="inputDouble">2 Plazas</Form.Label>
              <InputGroup>
                <Form.Control
                  type="number"
                  id="inputDouble"
                  aria-describedby="formDesc"
                  className="input-group-addon"
                />
              </InputGroup>
            </div>
            <div className="col-2">
              <Form.Label htmlFor="inputSingle">1 Plaza</Form.Label>
              <Form.Control
                type="number"
                id="inputSingle"
                aria-describedby="formDesc"
              />
            </div>

            <div className="col-2">
              <Form.Label htmlFor="inputSofa">Sofa Cama</Form.Label>
              <Form.Control
                type="number"
                id="inputSofa"
                aria-describedby="formDesc"
              />
            </div>

            <div className="col-2">
              <Form.Label htmlFor="inputMattress">Colchon</Form.Label>
              <Form.Control
                type="number"
                id="inputMattress"
                aria-describedby="formDesc"
              />
            </div>

            <div className="col-2">
              <Form.Label htmlFor="inputBunk">Cucheta</Form.Label>
              <Form.Control
                type="number"
                id="inputBunk"
                aria-describedby="formDesc"
              />
            </div>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}
