const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./DataBase/Config");

//Creo servidor de express
const app = express();

//Conexion DB
dbConnection();

//cors
app.use(cors());

//Directorio Publico
app.use(express.static("public"));

//Parseo de Body
app.use(express.json());

//Rutas
app.use("/api/auth", require("./Routes/Auth"));
app.use("/api/registerProduct", require("./Routes/RegisterPublication"));

//Peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor Corriendo en puerto ${process.env.PORT}`);
});
