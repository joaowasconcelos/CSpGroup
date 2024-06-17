const express = require("express");
const router = express.Router();

const { cadastro } = require("../controllers/cadastroController");
const { LoginPerfis } = require("../controllers/loginController");
const {cadastroEspecia, selectEspecialidade, updateEspecialidade} = require("../controllers/cadastroEspecialidade");
const {cadastroConsulta} = require("../controllers/cadastroConsulta");
const {cadastroProntuario} = require("../controllers/cadastroProntuario");
const { viewPaciente } = require("../controllers/pacienteController");
const {selects} = require("../controllers/selectController");

// router.get('/', (req, res) => {
//     res.render('index', { title: 'Página Inicial' });
// });
// router.get('/Cadastro', cadastro.paginaCadastro);
// router.get ("/Login",LoginPerfis.paginaLogin);
// router.get('/login/loginTipo', LoginPerfis.selecionaTipo);
// router.get('/login/loginCef', LoginPerfis.selecionaLogin);

router.post("/Cadastro", LoginPerfis.LoginPessoa);
router.post("/Pessoa/novo",cadastro.adicionaPessoa);
router.post ("/Cadastro/Especialidade",cadastroEspecia.cadastraEspecialidade)
router.post ("/Cadastro/Consulta",cadastroConsulta.cadastraConsulta)
router.post ("/Cadastro/Prontuario/:id",cadastroProntuario.cadastraProntuario)
router.post("/Login",LoginPerfis.LoginPessoa);

router.get("/Seleciona/Especialidade",selectEspecialidade.selectsEspecialidade)
router.get("/pessoas/infos/:id",viewPaciente.selecionaInfosPaciente);
router.get("/paciente/consultas/:id", viewPaciente.selecionaConsultas);
router.get("/Seleciona/Todas/Consultas",selects.selecionaTodasConsultas);
router.get("/Seleciona/Todos/Medicos",selects.SelecionaTodosMedicos);
router.get("/Seleciona/Todas/Pessoas",selects.SelecionaTodasPessoas);

router.put("/Update/especialidade/:id",updateEspecialidade.updateEspec);
router.put("/Update/telefone/:id",cadastro.updateTelefone);
router.put("/Update/endereco/:id",cadastro.updateEndereco);
router.put("/Update/consulta/:id",cadastroConsulta.updateConsultas);
router.put("/Update/prontuario/:id",cadastroProntuario.UpdateProntuario);

router.use(function (req, res) {
    res.status(404).render(`pages/pag_erro`, { message: '404 - Página não encontrada' })
})

module.exports = router;