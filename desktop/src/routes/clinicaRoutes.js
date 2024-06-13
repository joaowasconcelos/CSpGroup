const express = require("express");
const router = express.Router();

// const { cadastro } = require("../controllers/cadastroController")
// const { LoginPerfis } = require("../controllers/loginController")
// const {cadastroEspecia} = require("../controllers/cadastroEspecialidade");
// const {cadastroConsulta} = require("../controllers/cadastroConsulta");
const { viewPaciente } = require("../controllers/pacienteController");

// router.get('/', (req, res) => {
//     res.render('index', { title: 'Página Inicial' });
// });
// router.get('/Cadastro', cadastro.paginaCadastro);
// router.post("/Cadastro", LoginPerfis.LoginPessoa);
// router.post("/Pessoa/novo",cadastro.adicionaPessoa);
// router.post ("/Cadastro/Especialidade",cadastroEspecia.cadastraEspecialidade)
// router.post ("/Cadastro/Consulta",cadastroConsulta.cadastraConsulta)
// router.get ("/Login",LoginPerfis.paginaLogin) /*Direciona para a pagina de login*/
// router.post("/Login",LoginPerfis.LoginPessoa);
// router.get('/login/loginCef', LoginPerfis.selecionaLogin);
// router.get('/login/loginTipo', LoginPerfis.selecionaTipo);
router.get("/paciente/infos/:id",viewPaciente.selecionaInfosPaciente);
router.get("/paciente/consultas", viewPaciente.selecionaConsultas);

router.use(function (req, res) {
    res.status(404).render(`pages/pag_erro`, { message: '404 - Página não encontrada' })
})



module.exports = router;