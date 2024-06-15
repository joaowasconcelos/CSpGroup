const Prontuario = require("../models/classes/Prontuario");
const Consulta = require("../models/classes/Consulta")
const {criarProntu } = require("../models/ProntuarioModel");

const cadastroProntuario = {
    cadastraProntuario: async (req, res) => {
        try {
            const {Prontuario:[{diagnostico,medicacao}]}= req.body;
            const id = req.params.id
            console.log(id)
            const novoProntuario = new Prontuario(null,diagnostico,medicacao)
            const novaConsulta = new Consulta(null,null,null,null,id)
            if (!novoProntuario.validaCampos()) {
                return res.json({ message: 'Todos os campos são obrigatórios.' });
            }
            const result= await criarProntu(novoProntuario,novaConsulta);
            console.log("teste",result)        

        } catch (error) {
            console.error("Erro ao cadastrar Consulta:", error);
            res.status(500).json({ error: "Erro ao cadastrar uma Consulta" });
        }
    }
};

module.exports = { cadastroProntuario };
