const express = require('express');


//Registro usuario
const userRegister = (req, res) => {

    const {name, email, password} = req.body;

    res.json({
        ok: true,
        msg: 'Registro',
        name,
        email,
        password
    });

}
//Login Usuario
const userLogin = (req, res) => {

    const {email, password} = req.body;

    res.json({
        ok: true,
        msg: 'login'
    })

}
//Renovacion de Token
const tokenRenew = (req, res) => {

    res.json({
        "ok": true,
        msg: 'renew'
    })

}




module.exports = {userRegister, userLogin, tokenRenew};