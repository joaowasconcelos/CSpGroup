const express = require("express");
const router = express.Router();

const {cadastro} = require("../controllers/cadastroController");
const {cadastroEspecia} = require("../controllers/cadastroEspecialidade");
const {cadastroConsulta} = require("../controllers/cadastroConsulta")


router.post("/Pessoa/novo",cadastro.adicionaPessoa);
router.post ("/Cadastro/Especialidade",cadastroEspecia.cadastraEspecialidade)
router.post ("/Cadastro/Consulta",cadastroConsulta.cadastraConsulta)

module.exports = router;