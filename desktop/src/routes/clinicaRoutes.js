const express = require("express");
const router = express.Router();

const { cadastro } = require("../controllers/cadastroController");
const { LoginPerfis } = require("../controllers/loginController");
const { cadastroEspecia } = require("../controllers/cadastroEspecialidade");
const { cadastroConsulta } = require("../controllers/cadastroConsulta");
const { viewPaciente } = require("../controllers/pacienteController");
const { viewMedico } = require("../controllers/MedicoController");
const { viewAdm } = require("../controllers/AdmController");

// Página Inicial
router.get('/', (req, res) => {
    res.render('index', { title: 'Página Inicial' });
});

//Rotas de Cadastro
router.get('/Cadastro', cadastro.paginaCadastro);
router.post("/Pessoa/novo", cadastro.adicionaPessoa);
router.post("/Cadastro/Especialidade", cadastroEspecia.cadastraEspecialidade);
router.post("/Cadastro/Consulta", cadastroConsulta.cadastraConsulta);

//Login
router.get("/Login", LoginPerfis.paginaLogin); // Direciona para a página de login
router.post("/Login/entrar", LoginPerfis.LoginPessoa); // Realiza o login

// Paciente
router.get("/paciente/infos", viewPaciente.selecionaInfosPaciente);
router.get("/paciente/consultas", viewPaciente.selecionaConsultas);
router.get("/Paciente", viewPaciente.paginaPaciente); // Direciona para a página do paciente

// Médico
router.get("/Medico", viewMedico.paginaMedico); // Direciona para a página do médico

// Administrador
router.get("/Adm", viewAdm.paginaAdm); // Direciona para a página do administrador

// Tipo de Login
router.get('/login/loginTipo', LoginPerfis.selecionaTipo);

// Página de Consulta
router.get("/Consulta", cadastroConsulta.paginaConsulta); // Direciona para a página de consulta

// (404)
router.use((req, res) => {
    res.status(404).render('pages/pag_erro', { message: '404 - Página não encontrada' });
});

module.exports = router;
