const Login= require("../models/classes/Login");
// const Perfis = require("../models/Perfis");

const LoginPerfis = {
    LoginPessoa: async (req, res) => {
        try {
         const {login,senha,status,perfis:[{tipo,loginId}]} = req.body
        } catch (error) {
            console.log(error)
            res.json(error);
        }

    }
}
module.exports = {LoginPerfis}