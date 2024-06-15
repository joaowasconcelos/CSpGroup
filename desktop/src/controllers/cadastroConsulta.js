const Consulta = require("../models/classes/Consulta");
const Pessoa = require("../models/classes/Pessoa")
const { insertConsulta} = require("../models/ConsultaModel");


const cadastroConsulta = {
    cadastraConsulta: async (req, res) => {
        try {
            const { nome, cpf, nomeMedico, cpfMedico, Consulta: [{ data, hora, status }] } = req.body;
            console.log(req.body);
            const novaConsulta = new Consulta(null, data, hora, status);
            const novoPaciente = new Pessoa(null,cpf,nome,null,null,null);
            const novoMedico = new Pessoa(null,cpfMedico,nomeMedico,null,null,null)
            if (!novaConsulta.validaCampos()) {
                return res.json({ message: 'Todos os campos são obrigatórios.' });
            }
            const dataConsulta = novaConsulta.DataConvert(novaConsulta.Data)
            if (dataConsulta == "Invalid Date" || !(new Date(novaConsulta.Data) instanceof Date)) {
                return res.json({ message: "Data informada é invalida" });
            }
           

            const result = await insertConsulta(novoPaciente, novaConsulta, novoMedico);
            console.log("teste",result)        

        } catch (error) {
            console.error("Erro ao cadastrar Consulta:", error);
            res.status(500).json({ error: "Erro ao cadastrar uma Consulta" });
        }
    }
};

module.exports = { cadastroConsulta };
