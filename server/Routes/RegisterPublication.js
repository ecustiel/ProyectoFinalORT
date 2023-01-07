const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { fieldValidator } = require("../Middlewares/Field-Validator");
const { registerPublication } = require("../Controllers/RegisterPublication");

//Registro
router.post(
  "/registerProduct",
  [
    check("title", "El titulo es obligatorio!").not().isEmpty(),
    fieldValidator,
    //agregar las demas validaciones para el registro, separar con coma
  ],
  registerPublication
);

module.exports = router;
