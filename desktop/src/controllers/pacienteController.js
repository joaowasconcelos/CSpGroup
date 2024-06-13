const { selectInfosPaciente, selectConsultas } = require("../models/PacienteModel")

const viewPaciente = {

    paginaPaciente: async (req, res) => {
        try {
            res.render('pages/Paciente');
        }
        catch (error) {
            console.log(error);
            res.render('pages/pag_erro', { message: error });
        }


    },


    selecionaInfosPaciente: async (req, res) => {
        try {
            const id = req.body;
            const infosPaciente = await selectInfosPaciente(id)
            return res.json(infosPaciente)
        } catch (error) {
            console.log(error)
            res.json(error);
        }
    },

    selecionaConsultas: async (req, res) => {
        try {
            const id = req.body;
            const infosConsulta = await selectConsultas(id)
            return res.json(infosConsulta)
        } catch (error) {
            console.log(error)
            res.json(error);
        }
    }
}

module.exports = { viewPaciente }