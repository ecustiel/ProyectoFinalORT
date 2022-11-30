import React from "react";
import Select from "react-select";

const MultiSelectConfort = () => {
  const confortOptions = [
    { value: "Agua Caliente ", label: "Agua Caliente" },
    { value: "Aire Acondicionado", label: "Aire Acondicionado" },
    { value: "Amueblada", label: "Amueblada" },
    { value: "Barbacoa", label: "Barbacoa" },
    { value: "Calefaccion", label: "Calefaccion" },
    { value: "Calefon", label: "Calefon" },
    { value: "Cochera", label: "Cochera" },
    { value: "Deposito", label: "Deposito" },
    { value: "Estufa a Leña", label: "Estufa a Leña" },
    { value: "TV Cable", label: "TV Cable" },
    { value: "Jardin", label: "Jardin" },
    { value: "Lavanderia", label: "Lavanderia" },
    { value: "Parrillero", label: "Parrillero" },
    { value: "Piscina", label: "Piscina" },
    { value: "Se Aceptan Mascotas", label: "Se Aceptan Mascotas" },
    { value: "Terraza", label: "Terraza" },
  ];

  return (
    <>
      <Select
        isMulti
        name="confort"
        className="basic-multi-select"
        classNamePrefix="select"
        options={confortOptions}
      />
    </>
  );
};

export default MultiSelectConfort;
