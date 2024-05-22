const express = require("express");
const router = express.Router();

const cadastroController = require("../controllers/cadastroController")

router.post("/Pessoa/novo",cadastroController.cadastro)
module.exports = router;