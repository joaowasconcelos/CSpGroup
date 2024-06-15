const Login = require("../models/classes/Login");
const { selectLogin, verificarSenha } = require('../models/LoginModel')
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
            const { username, password } = req.body
            console.log(username, password)

            //const selecionaLogin = await selectLogin({username, password})
            const loginConsulta = new Login(null, username, password, null, null, null)
            console.log(loginConsulta)
            const result = await selectLogin(loginConsulta)
            if (result === "Medico") {
                console.log(result)
                console.log("entrou")
              
                return res.render('pages/Cadastro'); 
           
            }

        } catch (error) {
            console.log(error)
            res.json(error);

        }

    },
    selecionaLogin: async (req, res) => {
        try {
            console.log(req.body)
            const cpf = req.body;
            const selecionaLogin = await selectLogin(cpf)
            return res.json(selecionaLogin)
        } catch (error) {
            console.log(error)
            res.json(error);
        }
    },
    selecionaTipo: async (req, res) => {

        const { perfis: [{ tipo }] } = req.body
        console.log(tipo)
        const selecionaTipo = await Perfis.selectTipo(tipo)
        return res.json(selecionaTipo)
    },
}
module.exports = { LoginPerfis }