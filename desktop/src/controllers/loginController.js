const Login = require("../models/classes/Login");
const Perfis = require("../models/PerfisModel");

const LoginPerfis = {
    paginaLogin: async (req, res) => {
        try {
            res.render('pages/Login');
        }
        catch (error) {
            console.log(error);
            res.render('pages/pag_erro', { message: error });
        }


    },
    LoginPessoa: async (req, res) => {
        try {
            const { login, senha, status, perfis: [{ tipo, loginId }] } = req.body
        } catch (error) {
            console.log(error)
            res.json(error);
        }

    },
    selecionaLogin: async (req, res) => {
        try {
            const cpf = req.body;
            const selecionaLogin = await selectLogin(cpf)
            return res.json(selecionaLogin)
        } catch (error) {
            console.log(error)
            res.json(error);
        }
    },
    selecionaTipo: async (req, res) => {

        const {perfis: [{ tipo}] } = req.body
        const selecionaTipo = await Perfis.selectTipo(tipo)
        return res.json(selecionaTipo)
    }
}
module.exports = { LoginPerfis }