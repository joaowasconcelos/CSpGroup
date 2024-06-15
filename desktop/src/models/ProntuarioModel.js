const conectarBancoDeDados = require("../config/db");

async function criarProntu(prontuario, idconsulta) {

    const bd = await conectarBancoDeDados();
    try {
        await bd.beginTransaction();
        console.log(idconsulta)
        const ids = await bd.query(`
        select paciente_id, paciente_pessoa_id,funcionario_id,funcionario_pessoa_id, especialidade_id from tbl_consulta where id = ? `, [idconsulta.ids]);
        const ID_paciente = ids[0][0].paciente_id
        const ID_pacientePessoa = ids[0][0].paciente_pessoa_id
        const ID_funcionario = ids[0][0].funcionario_id
        const ID_funcionarioPessoa = ids[0][0].funcionario_pessoa_id
        const ID_especialidade = ids[0][0].especialidade_id
       console.log(ID_paciente,ID_pacientePessoa,ID_funcionario,ID_funcionarioPessoa,ID_especialidade)
        const [res] = await bd.query(`
        INSERT INTO tbl_prontuario (diagnostico,medicacao,consulta_id,paciente_id,paciente_pessoa_id,funcionario_id,funcionario_pessoa_id,especialidade_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [prontuario.diagnostico,prontuario.medicacao,idconsulta.ids,ID_paciente,ID_pacientePessoa,ID_funcionario,ID_funcionarioPessoa,ID_especialidade]);
        await bd.commit();
        return res;
    } catch (error) {
        console.error('Erro ao criar prontuario:', error);
        throw error;
    } finally {
        await bd.release();
    }

}
module.exports = { criarProntu };