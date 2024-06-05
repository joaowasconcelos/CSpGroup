const express = require("express");
const router = express.Router();

const {cadastro} = require("../controllers/cadastroController")
const{LoginPerfis} = require("../controllers/loginController")

router.post("/Pessoa/novo",cadastro.adicionaPessoa);
router.post("/Login",LoginPerfis.LoginPessoa);

module.exports = router;