const { json } = require("body-parser");
const conectarBancoDeDados = require("../config/db")

async function insert(pessoa, endereco, telefones, pacienteFuncionario, loginP, perfis, especialidades) {
    const bd = await conectarBancoDeDados();
    try {
        await bd.beginTransaction();

        const idtel = []
        telefones.forEach(async (tel) => {
            const resTel = await bd.query('INSERT INTO tbl_telefone (numero) VALUES (?)', [tel.numeroTelefone]);
            idtel.push(resTel[0].insertId);
        });
        const enderecoResult = await bd.query('INSERT INTO tbl_endereco (logradouro, bairro, estado, numero, complemento, cep) VALUES (?, ?, ?, ?, ?, ?)',
            [endereco.logradouro, endereco.bairro, endereco.estado, endereco.numeroEndereco, endereco.complementoEndereco, endereco.cep]);
        const enderecoId = enderecoResult[0].insertId;
        console.log('ID do Endereço:', enderecoId);

        const pessoaResult = await bd.query('INSERT INTO tbl_pessoa (cpf, nome, data_nasc, genero, email, endereco_id) VALUES (?, ?, ?, ?, ?, ?)',
            [pessoa.cpf, pessoa.nome, pessoa.dataNasc, pessoa.genero, pessoa.email, enderecoId]);
        const pessoaId = pessoaResult[0].insertId;
        console.log('ID da Pessoa:', pessoaId);

        const idtelHasPessoa = []
        idtel.forEach(async (id) => {
            const resTelPessoa = await bd.query("INSERT INTO tbl_pessoa_has_tbl_telefone(pessoa_id,telefone_id, pessoa_tbl_endereco_id) VALUES (?,?,?)",
                [pessoaId, id, enderecoId]);
            idtelHasPessoa.push(resTelPessoa[0].insertId)
        });

        await bd.query('INSERT INTO tbl_paciente (pessoa_id) VALUES (?)', [pessoaId]);

        if (pacienteFuncionario !== null) {
            const { dataAdmissao, crm } = pacienteFuncionario;
            await bd.query('INSERT INTO tbl_funcionario (pessoa_id,pessoa_endereco_id, data_admissao, crm) VALUES (?, ?, ?,?)', [pessoaId, enderecoId, dataAdmissao, crm]);
        }
        const loginResul = await bd.query(`INSERT INTO tbl_login(login,senha,status,pessoa_id,pessoa_endereco_id) values(?,?,?,?,?)`,
            [loginP.login, loginP.senha, loginP.status, pessoaId, enderecoId])
        const loginId = loginResul[0].insertId

        const perfisResult = await bd.query(`INSERT INTO tbl_perfis(tipo,login_id,login_pessoa_id,login_pessoa_endereco_id) values(?,?,?,?)`,
            [perfis.tipo, loginId, pessoaId, enderecoId])
        const perfisId = perfisResult[0].insertId

        if (especialidades !== null) {
            const IdEspecialidade = await bd.query(`SELECT ID FROM tbl_especialidade WHERE desc_especialide = ?;`, [especialidades._descEspecialidade]);
        }

        
        await bd.commit();
    }
    catch (error) {
        await bd.rollback();
        console.log('Erro na transação:', error);
        return { error: 'Falha na transação', details: error };
    } finally {
        bd.release();
    }
}

module.exports = { insert };