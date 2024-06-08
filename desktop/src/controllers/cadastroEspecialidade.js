const Especialidade = require("../models/Especialidade")
const { insertEspecialidade } = require("../models/EspecialidadeModel")

const cadastroEspecia = {
    cadastraEspecialidade: async (req, res) => {
        try {
            const { especialidade } = req.body;
            console.log(req.body);

            const objEspecialidade = [];

            if (especialidade.length > 0) {
                especialidade.forEach(descEspec => {
                    const novaEspecialidade = new Especialidade(null,descEspec.descEspecialidade);
                    objEspecialidade.push(novaEspecialidade)
                })
            }
            console.log(objEspecialidade);
            const result = await insertEspecialidade(objEspecialidade);
            return res.json({ message: "Especialidades cadastradas com sucesso", result });

        } catch (error) {
            console.log(error)
            res.json(error);
        }
    }
}

module.exports = { cadastroEspecia }