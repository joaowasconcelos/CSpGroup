const Consulta = require("../models/classes/Consulta");
const Prontuario = require("../models/classes/Prontuario")
const { insertConsulta } = require("../models/ConsultaModel");


const cadastroConsulta = {

    paginaConsulta: async (req, res) => {
        try {
            res.render('pages/Consulta');
        }
        catch (error) {
            console.log(error);
            res.render('pages/pag_erro', { message: error });
        }


    },


    cadastraConsulta: async (req, res) => {
        try {
            const { nome, cpf, nomeMedico, cpfMedico, Consulta: [{ data, hora, status }],Prontuario:[{diagnostico,medicacao}] } = req.body;
            console.log(req.body);
            const novaConsulta = new Consulta(null, data, hora, status);
            const novoProntuario = new Prontuario(null,diagnostico,medicacao)
            if (!novaConsulta.validaCampos() || !novoProntuario.validaCampos()) {
                return res.json({ message: 'Todos os campos são obrigatórios.' });
            }
            const dataConsulta = novaConsulta.DataConvert(novaConsulta.Data)
            if (dataConsulta == "Invalid Date" || !(new Date(novaConsulta.Data) instanceof Date)) {
                return res.json({ message: "Data informada é invalida" });
            }

            const result = await insertConsulta(nome, cpf, novaConsulta, nomeMedico, cpfMedico,novoProntuario);
            

        } catch (error) {
            console.error("Erro ao cadastrar Consulta:", error);
            res.status(500).json({ error: "Erro ao cadastrar uma Consulta" });
        }
    }

};


module.exports = { cadastroConsulta };
