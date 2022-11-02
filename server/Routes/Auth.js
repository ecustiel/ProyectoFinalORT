const express = require('express');
const router = express.Router();

const {userRegister, userLogin, tokenRenew} = require('../Controllers/Auth');


//Login
router.post('/login', userLogin);

//Registro
router.post('/register', userRegister);

//Renovacion de Token
router.get('/renew', tokenRenew);



module.exports = router;