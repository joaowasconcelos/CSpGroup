const Consulta = require("../models/classes/Consulta");
const { insertConsulta } = require("../models/ConsultaModel");

const cadastroConsulta = {
    cadastraConsulta: async (req, res) => {
        try {
            const { nome, cpf, nomeMedico, cpfMedico, Consulta: [{ data, hora, status }] } = req.body;
            console.log(req.body);
            const novaConsulta = new Consulta(null, data, hora, status);

            const result = await insertConsulta(nome, cpf, novaConsulta, nomeMedico, cpfMedico);
            return res.json({ message: "Consulta cadastrada com sucesso", result });

        } catch (error) {
            console.error("Erro ao cadastrar Consulta:", error);
            res.status(500).json({ error: "Erro ao cadastrar uma Consulta" });
        }
    }
};

module.exports = { cadastroConsulta };