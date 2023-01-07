const { Schema, model } = require("mongoose");

const registerPublicationSchema = Schema({
  title: {
    type: String,
    require: true,
  },
  temp1: {
    type: String,
    require: true,
  },
  temp2: {
    type: String,
    require: true,
  },
  temp3: {
    type: String,
    require: true,
  },
  pric1: {
    type: String,
    require: true,
  },
  pric2: {
    type: String,
    require: true,
  },
  pric3: {
    type: String,
    require: true,
  },
  cantHuespedes: {
    type: String,
    require: true,
  },
  tipoPropiedad: {
    type: String,
    require: true,
  },
  cantDormitorios: {
    type: String,
    require: true,
  },
  cantBanos: {
    type: String,
    require: true,
  },
  garaje: {
    type: String,
    require: true,
  },
  vistaAlMar: {
    type: String,
    require: true,
  },
  distanciaAlMar: {
    type: String,
    require: true,
  },
  dosPlazas: {
    type: String,
    require: true,
  },
  unaPlaza: {
    type: String,
    require: true,
  },
  sofaCama: {
    type: String,
    require: true,
  },
  colchon: {
    type: String,
    require: true,
  },
  cucheta: {
    type: String,
    require: true,
  },
  opcionesConfort: {
    type: String,
    require: true,
  },
  opcionesSeguridad: {
    type: String,
    require: true,
  },
  youtubeVideo: {
    type: String,
    require: true,
  },
  descripcionPropiedad: {
    type: String,
    require: true,
  },
  imagenesBase64: {
    type: String,
    require: true,
  },
});

module.exports = model("RegisterPublication", registerPublicationSchema);
