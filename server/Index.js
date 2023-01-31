const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./DataBase/Config");
const bodyParser = require("body-parser");

//Creo servidor de express
const app = express();

//Conexion DB
dbConnection();

//cors
app.use(cors());

//Directorio Publico
app.use(express.static("public"));

//Aumento el tamano de los Json por las imagenes Base64
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

//Parseo de Body
app.use(express.json());

//Rutas
app.use("/api/auth", require("./Routes/Auth"));
app.use("/api/registerProduct", require("./Routes/RegisterPublication"));
app.use("/api/search", require("./Routes/RegisterPublication"));
app.use("/api/publication", require("./Routes/RegisterPublication"));

//Peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor Corriendo en puerto ${process.env.PORT}`);
});
