const conectarBancoDeDados = require("../config/db");

async function insertConsulta(nomeP, cpfP, novaConsulta, nomeMedico, cpfMedico) {
    const bd = await conectarBancoDeDados();
    try {
        await bd.beginTransaction();

       
        const [pessoaResult] = await bd.query(
            `SELECT id FROM tbl_pessoa WHERE nome = ? AND cpf = ?;`,
            [nomeP, cpfP]
        );
        
        if (pessoaResult.length === 0) {
            throw new Error('Pessoa não encontrada.');
        }

        const pessoaId = pessoaResult[0].id;
        console.log('ID da Pessoa:', pessoaId);

      
        const [pacienteResult] = await bd.query(
            `SELECT id FROM tbl_paciente WHERE pessoa_id = ?;`,
            [pessoaId]
        );
        
        if (pacienteResult.length === 0) {
            throw new Error('Paciente não encontrado.');
        }

        const pacienteId = pacienteResult[0].id;
        console.log('ID do Paciente:', pacienteId);
        const [funcionarioResult] = await bd.query(
            `SELECT id FROM tbl_funcionario WHERE pessoa_id = (SELECT id FROM tbl_pessoa WHERE nome = ? AND cpf = ? limit 1);`,
            [nomeMedico, cpfMedico]
           
        );
        
        if (funcionarioResult.length === 0) {
            throw new Error('Funcionário não encontrado.');
        }

        const funcionarioId = funcionarioResult[0].id;
        console.log('ID do Funcionário:', funcionarioId);

        const funcionarioPessoaResult = await bd.query(
            `SELECT funcionario_pessoa_id FROM tbl_funcionario_has_tbl_especialidade WHERE funcionario_id = ?;`,
            [funcionarioId]
        );
        console.log(funcionarioId)
        console.log(funcionarioPessoaResult)

        if (funcionarioPessoaResult.length === 0) {
            throw new Error('Funcionário Pessoa não encontrado.');
        }

        const funcionarioPessoaId = funcionarioPessoaResult[0].funcionario_pessoa_id;
        console.log('ID do Funcionário Pessoa:', funcionarioPessoaId);

        const [especialidadeResult] = await bd.query(
            `SELECT especialidade_id FROM tbl_funcionario_has_tbl_especialidade WHERE funcionario_id = ?;`,
            [funcionarioId]
        );

        if (especialidadeResult.length === 0) {
            throw new Error('Especialidade não encontrada.');
        }

        const especialidadeId = especialidadeResult[0].especialidade_id;
        console.log('ID da Especialidade:', especialidadeId);

        // Inserir a consulta
        const [insertResult] = await bd.query(
            `INSERT INTO tbl_consulta (data, hora, status, paciente_id, paciente_pessoa_id, funcionario_id, funcionario_pessoa_id, especialidade_id)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
            [novaConsulta.data, novaConsulta.hora, novaConsulta.status, pacienteId, pessoaId, funcionarioId, funcionarioPessoaId, especialidadeId]
        );

        console.log('Consulta inserida com sucesso:', insertResult.insertId);

        await bd.commit();
        return { id: insertResult.insertId };
    } catch (error) {
        await bd.rollback();
        console.log('Erro na transação:', error);
        return { error: 'Falha na transação', details: error };
    } finally {
        bd.release();
    }
}

function formatarData(data) {
    const [dia, mes, ano] = data.split('/');
    return `${ano}-${mes}-${dia}`;
}

module.exports = { insertConsulta };
