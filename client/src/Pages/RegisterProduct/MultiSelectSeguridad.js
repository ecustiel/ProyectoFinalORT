import React from "react";
import Select from "react-select";

const MultiSelectSeguridad = () => {
  const securityOptions = [
    { value: "Alarma", label: "Alarma" },
    { value: "Sistema Camaras", label: "Sistema Camaras" },
    { value: "Cerca Perimetral", label: "Cerca Perimetral" },
    { value: "Porton Electrico", label: "Porton Electrico" },
    { value: "Rejas", label: "Rejas" },
    { value: "Guardia de Seguridad", label: "Guardia de Seguridad" },
    { value: "Segura para Niños", label: "Segura para Niños" },
  ];

  return (
    <>
      <Select
        isMulti
        name="confort"
        className="basic-multi-select"
        classNamePrefix="select"
        options={securityOptions}
      />
    </>
  );
};

export default MultiSelectSeguridad;
