const express = require("express");
const router = express.Router();

const {cadastro} = require("../controllers/cadastroController")
const{LoginPerfis} = require("../controllers/loginController")
const {viewPaciente} = require("../controllers/pacienteController")

router.post("/Pessoa/novo",cadastro.adicionaPessoa);
router.post("/Login",LoginPerfis.LoginPessoa);
router.get("/paciente/infos", viewPaciente.selecionaInfosPaciente);
router.get("/paciente/consultas", viewPaciente.selecionaConsultas);

module.exports = router;