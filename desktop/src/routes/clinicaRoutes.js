const express = require("express");
const router = express.Router();

const {cadastro} = require("../controllers/cadastroController")
const{cadastroEspecia} = require("../controllers/cadastroEspecialidade")

router.post("/Pessoa/novo",cadastro.adicionaPessoa);
router.post ("/Cadastro/Especialidade",cadastroEspecia.cadastraEspecialidade)

module.exports = router;