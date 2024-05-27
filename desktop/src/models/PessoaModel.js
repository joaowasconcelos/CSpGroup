const connection = require("../config/db");

async function insert(pessoa, endereco, telefones, pacienteFuncionario) {
    const bd = await connection();
    try {
        await bd.beginTransaction();

        const telefoneIds = await Promise.all(telefones.map(async (tel) => {
            const [telefoneResult] = await bd.query(
                'INSERT INTO tbl_telefone (numero) VALUES (?)',
                [tel.numeroTelefone]
            );
            return telefoneResult.insertId;
        }));
        console.log('ID do Telefone:', telefoneIds);

        // telefone.forEach(async telefone => {
        //     try {
        //         const result = await bd.query('INSERT INTO tbl_telefone (numero) VALUES (?)', [telefone.numeroTelefone]);
        //         console.log('Telefone inserido com ID:', result.insertId);
        //     } catch (error) {
        //         console.error('Erro ao inserir telefone:', error);
        //     }
        // })
        console.log("teste telefone",telefoneIds)

        const [enderecoResult] = await bd.query('INSERT INTO tbl_endereco (logradouro, bairro, estado, numero, complemento, cep) VALUES (?, ?, ?, ?, ?, ?)',
            [endereco.logradouro, endereco.bairro, endereco.estado, endereco.numeroEndereco, endereco.complementoEndereco, endereco.cep]);
        const enderecoId = enderecoResult.insertId;
        console.log('ID do Endereço:', enderecoId);

        const [pessoaResult] = await bd.query('INSERT INTO tbl_pessoa (cpf, nome, data_nasc, genero, email, id_endereco) VALUES (?, ?, ?, ?, ?, ?)',
            [pessoa.cpf, pessoa.nome, pessoa.dataNasc, pessoa.genero, pessoa.email, enderecoId]);
        const pessoaId = pessoaResult.insertId;
        console.log('ID da Pessoa:', pessoaId)

        // const [pessoaHasTelefoneResult] = await bd.query("INSERT INTO tbl_pessoa_has_tbl_telefone(id_telefone, id_pessoa, pessoa_endereco_id) VALUES (?,?,?)",
        //     [telefoneIds, pessoaId, enderecoId]);
        // console.log(pessoaHasTelefoneResult)

        for (const telefoneId of telefoneIds) {
            try {
                await bd.query("INSERT INTO tbl_pessoa_has_tbl_telefone(id_telefone, id_pessoa, pessoa_endereco_id) VALUES (?,?,?)",
                    [telefoneId, pessoaId, enderecoId]);
                console.log('Relacionamento entre pessoa e telefone inserido com sucesso.');
            } catch (error) {
                console.error('Erro ao inserir relacionamento entre pessoa e telefone:', error);
            }
        }

        if (pacienteFuncionario === null) {
            await bd.query('INSERT INTO tbl_paciente (pessoa_id) VALUES (?)', [pessoaId]);
        } else {
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