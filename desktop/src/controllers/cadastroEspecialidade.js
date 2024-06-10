const Especialidade = require("../models/classes/Especialidade");
const { insertEspecialidade } = require("../models/EspecialidadeModel");

const cadastroEspecia = {
    cadastraEspecialidade: async (req, res) => {
        try {
            const { Especialidade: especialidadeArray } = req.body;
            
            console.log("Request Body:", req.body);
            console.log("Tipo de especialidadeArray:", typeof especialidadeArray);
            console.log("Conteúdo de especialidadeArray:", especialidadeArray);

            const objEspecialidade = [];

           
            if (Array.isArray(especialidadeArray) && especialidadeArray.length > 0) {
                especialidadeArray.forEach(descEspec => {
                    if (descEspec._descEspecialidade) {
                        const novaEspecialidade = new Especialidade(null, descEspec._descEspecialidade);
                        objEspecialidade.push(novaEspecialidade);
                    } else {
                        console.error("descEspec._descEspecialidade está faltando:", descEspec);
                    }
                });
            } else {
                console.error("especialidadeArray não é um array ou está vazio");
                return res.status(400).json({ error: "Especialidade deve ser um array não vazio." });
            }

            console.log("Objeto de Especialidades:", objEspecialidade);
            const result = await insertEspecialidade(objEspecialidade);
            return res.json({ message: "Especialidades cadastradas com sucesso", result });

        } catch (error) {
            console.error("Erro ao cadastrar especialidades:", error);
            res.status(500).json({ error: "Erro ao cadastrar especialidades" });
        }
    }
};

module.exports = { cadastroEspecia };
