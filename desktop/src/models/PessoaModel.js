const conectarBancoDeDados = require("../config/db")

async function insert(pessoa, endereco, telefones, pacienteFuncionario, loginP, perfis, especialidades) {
    const bd = await conectarBancoDeDados();
    try {
        await bd.beginTransaction();

        const IdTelefone = await bd.query(`SELECT numero FROM tbl_telefone WHERE numero = ? limit 1;`, [telefones[0].numeroTelefone]);

        if (IdTelefone[0].length > 0 ) {
            console.log("Telefone já cadastrado na base de dados");
            return('Telefone já cadastrado na base de dados');
        }
     

        const idtel = []
        telefones.forEach(async (tel) => {
            const resTel = await bd.query('INSERT INTO tbl_telefone (numero) VALUES (?)', [tel.numeroTelefone]);
            idtel.push(resTel[0].insertId);
            console.log('ID do Telefone:', idtel[0]);
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
            console.log("Inseriu Pessoa e Telefone")
        });

        await bd.query('INSERT INTO tbl_paciente (pessoa_id) VALUES (?)', [pessoaId]);
        let funcionarioId = null;

        if (pacienteFuncionario !== null) {
            const { dataAdmissao, crm } = pacienteFuncionario;
            const funcionarioResult = await bd.query('INSERT INTO tbl_funcionario (pessoa_id,pessoa_endereco_id, data_admissao, crm) VALUES (?, ?, ?,?)', [pessoaId, enderecoId, dataAdmissao, crm]);
            funcionarioId = funcionarioResult[0].insertId
        }

        const loginResul = await bd.query(`INSERT INTO tbl_login(login,senha,status,pessoa_id,pessoa_endereco_id) values(?,?,?,?,?)`,
            [loginP.login, loginP.senha, loginP.status, pessoaId, enderecoId])
        const loginId = loginResul[0].insertId
        console.log('ID do Login:', loginId);

        const perfisResult = await bd.query(`INSERT INTO tbl_perfis(tipo,login_id,login_pessoa_id,login_pessoa_endereco_id) values(?,?,?,?)`,
            [perfis.tipo, loginId, pessoaId, enderecoId])
        const perfisId = perfisResult[0].insertId
        console.log('ID do Perfil:', perfisId);

        const IdEspecialidade = await bd.query(`SELECT id FROM tbl_especialidade WHERE desc_especialidade = ? limit 1;`, [especialidades._descEspecialidade]);
        if (IdEspecialidade[0][0] == undefined) {
            console.log("Especialidade não encontrada");
            return
        }
        const IdEspecialidades = IdEspecialidade[0][0].id;
        console.log("ID da Especialidade",IdEspecialidade[0][0].id)

        const idesp = []
        testeEsp = [especialidades]

        testeEsp.forEach(async (esp) => {
            const resEsp = await bd.query(`INSERT INTO tbl_funcionario_has_tbl_especialidade (funcionario_id,funcionario_pessoa_id,funcionario_pessoa_endereco_id,especialidade_id) VALUES (?,?,?,?);`,
                [funcionarioId, pessoaId, enderecoId, IdEspecialidades]);
            idesp.push(resEsp.insertId);
            console.log("Inseriu Funcionario e Especialidade")
        });
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