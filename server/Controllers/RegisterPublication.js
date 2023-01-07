const express = require("express");
const RegisterPublicationModel = require("../Models/RegisterPublication-Model");

const registerPublication = async (req, res) => {
  //const { email, password } = req.body;

  try {
    //Controlo si existe el mail
    //tendria que buscar el usuario
    //let usr = await User.findOne({email});

    let regPub = new RegisterPublicationModel(req.body);
    console.log(regPub);

    //Guardo en Base
    await regPub.save();

    //Genero el JWT
    //const jwtToken = await generateJWT(usr.id, usr.name);

    res.status(201).json({
      ok: true,
      msg: "Agregada Correctamente!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Errores al ingresar los datos!",
    });
  }
};

module.exports = { registerPublication };
