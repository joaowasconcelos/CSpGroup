const connection = require("../config/db");

async function insert(pessoa, endereco, telefones, pacienteFuncionario) {
    const bd = await connection();
    try {
        await bd.beginTransaction();

        const idtel = []
        telefones.forEach(async (tel) => {
            const resTel = await bd.query('INSERT INTO tbl_telefone (numero) VALUES (?)', [tel.numeroTelefone]);
            idtel.push(resTel[0].insertId);
        });


        console.log()
        console.log('ID do Telefone:', idtel);

        const enderecoResult = await bd.query('INSERT INTO tbl_endereco (logradouro, bairro, estado, numero, complemento, cep) VALUES (?, ?, ?, ?, ?, ?)',
            [endereco.logradouro, endereco.bairro, endereco.estado, endereco.numeroEndereco, endereco.complementoEndereco, endereco.cep]);
        const enderecoId = enderecoResult[0].insertId;
        console.log('ID do Endereço:', enderecoId);

        const pessoaResult = await bd.query('INSERT INTO tbl_pessoa (cpf, nome, data_nasc, genero, email, endereco_id) VALUES (?, ?, ?, ?, ?, ?)',
            [pessoa.cpf, pessoa.nome, pessoa.dataNasc, pessoa.genero, pessoa.email, enderecoId]);
        const pessoaId = pessoaResult[0].insertId;
        console.log('ID da Pessoa:', pessoaId)

        // const [pessoaHasTelefoneResult] = await bd.query("INSERT INTO tbl_pessoa_has_tbl_telefone(id_telefone, id_pessoa, pessoa_endereco_id) VALUES (?,?,?)",
        //     [telefoneIds, pessoaId, enderecoId]);
        // console.log(pessoaHasTelefoneResult)

        // for (const telefoneId of telefoneIds) {
        //     try {
        //         await bd.query("INSERT INTO tbl_pessoa_has_tbl_telefone(id_telefone, id_pessoa, pessoa_tbl_endereco_id) VALUES (?,?,?)",
        //             [telefoneId, pessoaId, enderecoId]);
        //         console.log('Relacionamento entre pessoa e telefone inserido com sucesso.');
        //     } catch (error) {
        //         console.error('Erro ao inserir relacionamento entre pessoa e telefone:', error);
        //     }
        // }

        const idtelHasPessoa = []
        idtel.forEach(async (id) => {
            const resTelPessoa = await bd.query("INSERT INTO tbl_pessoa_has_tbl_telefone(pessoa_id,telefone_id, pessoa_tbl_endereco_id) VALUES (?,?,?)",
                [pessoaId, id, enderecoId]);
            idtelHasPessoa.push(resTelPessoa[0].insertedId)
        });


        await bd.query('INSERT INTO tbl_paciente (pessoa_id) VALUES (?)', [pessoaId]);
       

        if (pacienteFuncionario !== null) {
            const { dataAdmissao, crm } = pacienteFuncionario;
            await bd.query('INSERT INTO tbl_funcionario (pessoa_id,pessoa_endereco_id, data_admissao, crm) VALUES (?, ?, ?,?)', [pessoaId, enderecoId, dataAdmissao, crm]);
        }
        await bd.commit();
        return { message: 'Inserção bem-sucedida', pessoaId };

    }

    catch (error) {
        await bd.rollback();
        console.log('Erro na transação:', error);
        return { error: 'Falha na transação', details: error };
    } finally {
        bd.end();
    }
}

module.exports = { insert };