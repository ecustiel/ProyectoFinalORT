import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaUserFriends,
  FaDoorOpen,
  FaBath,
  FaCarAlt,
  FaWater,
  FaChair,
  FaObjectUngroup,
  FaProcedures,
} from "react-icons/fa";
import { BiBed } from "react-icons/bi";

const Caracteristicas = ({ publicationData }) => {
  const [
    {
      cantHuespedes,
      cantDormitorios,
      cantBanos,
      garaje,
      vistaAlMar,
      distanciaAlMar,
      dosPlazas,
      unaPlaza,
      sofaCama,
      colchon,
      cucheta,

      setState,
    },
  ] = useState(publicationData);

  return (
    <div className="midside-caracteristicas">
      <h3>Comodidades</h3>
      <ListGroup horizontal>
        <ListGroup.Item className="lst-group-1">
          <FaUserFriends />
          <strong> Cant. Huespedes Permitidos: {cantHuespedes} </strong>
        </ListGroup.Item>
        <ListGroup.Item className="lst-group-1">
          <FaDoorOpen />
          <strong> Cant. Dormitorios: {cantDormitorios} </strong>
        </ListGroup.Item>
        <ListGroup.Item className="lst-group-1">
          <FaBath />
          <strong> Cant. Baños: {cantBanos} </strong>
        </ListGroup.Item>
        <ListGroup.Item className="lst-group-1">
          <FaCarAlt />
          <strong> Garaje Disponibles: {garaje} </strong>
        </ListGroup.Item>
        <ListGroup.Item className="lst-group-1">
          <FaWater />
          <strong> Vista al Mar: {vistaAlMar} </strong>
        </ListGroup.Item>
        <ListGroup.Item className="lst-group-1">
          <BiBed />
          <strong> Cama 2 Plazas: {dosPlazas} </strong>
        </ListGroup.Item>
        <ListGroup.Item className="lst-group-1">
          <BiBed />
          <strong> Cama 1 Plaza: {unaPlaza} </strong>
        </ListGroup.Item>
        <ListGroup.Item className="lst-group-1">
          <FaChair />
          <strong> Sofa Cama: {sofaCama} </strong>
        </ListGroup.Item>
        <ListGroup.Item className="lst-group-1">
          <FaObjectUngroup />
          <strong> Colchones: {colchon} </strong>
        </ListGroup.Item>
        <ListGroup.Item className="lst-group-1">
          <FaProcedures />
          <strong> Cucheta: {cucheta} </strong>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Caracteristicas;
