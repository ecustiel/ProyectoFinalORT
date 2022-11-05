const express = require('express');
const User =  require('../Models/User-Model');
const bcrypt = require('bcryptjs');
const {generateJWT} = require('../Helpers/Jwt');


//Registro usuario
const userRegister = async(req, res) => {

    const {email, password} = req.body;

    try {

        //Controlo si existe el mail
        let usr = await User.findOne({email});

        if(usr) {
            return res.status(400).json({
                ok: false,
                msg: 'El Email ya esta en uso!'
            });
        }

        usr = new User(req.body);

        //Encriptador de Contrasena
        const salt = bcrypt.genSaltSync();
        usr.password = bcrypt.hashSync(password, salt);

        //Guardo en Base
        await usr.save()
        

        //Genero el JWT
        const jwtToken = await generateJWT(usr.id, usr.name);
    
        res.status(201).json({
            ok: true,
            uid: usr.id,
            name: usr.name,
            jwtToken
        });  

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Errores al ingresar los datos!'
        })
        

    }


    

}


//Login Usuario
const userLogin = async(req, res) => {

    const {email, password} = req.body;

    
    try {

        //Controlo si existe el mail
        const usr = await User.findOne({email});

        if(!usr) {
            return res.status(400).json({
                ok: false,
                msg: 'Email Incorrecto!'
            });
        }

        //Confirmo las pass
        const validPassword = bcrypt.compareSync(password, usr.password);

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña Incorrecta'
            })
        }

        //Genero el JWT
        const jwtToken = await generateJWT(usr.id, usr.name);

        res.json({
            ok: true,
            uid: usr.id,
            name: usr.name,
            jwtToken
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Errores al ingresar los datos!'
        })
    }

    

}



//Renovacion de JWT
const tokenRenew = async(req, res) => {

    const {uid, name } = req;

    //Genero nuevo jwt
    const jwtToken = await generateJWT(uid, name);

    res.json({
        "ok": true,
        jwtToken
    })

}




module.exports = {userRegister, userLogin, tokenRenew};