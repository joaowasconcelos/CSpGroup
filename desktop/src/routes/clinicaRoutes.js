const express = require("express");
const router = express.Router();

const { cadastro } = require("../controllers/cadastroController")
const { LoginPerfis } = require("../controllers/loginController")

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

module.exports = router;