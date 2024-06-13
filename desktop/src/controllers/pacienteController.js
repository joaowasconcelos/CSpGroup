const { selectInfosPaciente, selectConsultas } = require("../models/PacienteModel")
const Pessoa = require("../models/classes/Pessoa")

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
            // const pacienteId = req.params.id; 
            const {id} = req.body
            console.log(req.body.id)
            const pacienteID = req.body.id
            const novaPessoa = new Pessoa(pacienteID,null,null,null,null,null)
            const infosPaciente = await selectInfosPaciente(novaPessoa.id)
            console.log(infosPaciente[0][0])
            res.json(infosPaciente[0][0])
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