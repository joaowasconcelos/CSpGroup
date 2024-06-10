const express = require("express");
const router = express.Router();


const { cadastro } = require("../controllers/cadastroController")
const { LoginPerfis } = require("../controllers/loginController")
const {cadastro} = require("../controllers/cadastroController");
const {cadastroEspecia} = require("../controllers/cadastroEspecialidade");
const {cadastroConsulta} = require("../controllers/cadastroConsulta")

router.post("/Pessoa/novo", cadastro.adicionaPessoa);
router.post("/Login", LoginPerfis.LoginPessoa);

router.get('/', (req, res) => {
    res.render('index', { title: 'Página Inicial' });
});


router.get('/Cadastro', cadastro.paginaCadastro);
router.get('/Login', cadastro.paginaLogin);


router.use(function (req, res) {
    res.status(404).render(`pages/pag_erro`, { message: '404 - Página não encontrada' })
})



router.post("/Pessoa/novo",cadastro.adicionaPessoa);
router.post ("/Cadastro/Especialidade",cadastroEspecia.cadastraEspecialidade)
router.post ("/Cadastro/Consulta",cadastroConsulta.cadastraConsulta)
router.post("/Login",LoginPerfis.LoginPessoa);
router.get("/paciente/infos", viewPaciente.selecionaInfosPaciente);
router.get("/paciente/consultas", viewPaciente.selecionaConsultas);

module.exports = router;