const express = require("express");
const router = express.Router();

const { cadastro } = require("../controllers/cadastroController");

router.post("/Pessoa/novo", cadastro.adicionaPessoa);

module.exports = router;
