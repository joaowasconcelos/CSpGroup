const connection = require("../config/db");

async function insert(pessoa, endereco, telefone, pacienteFuncionario) {
    const bd = await connection();
    try {
        await connection.beginTransaction();

        telefone.forEach(async (telefone) => {
            await connection.query('INSERT INTO tbl_telefone (numero) VALUES (?)', [res[0].insertId, telefone.numero]);
        });
        
        const insertEndereco = await connection.query('INSERT INTO tbl_endereco (logradouro,bairro,estado,numero,complemento,cep) VALUES (?,?,?,?,?,?)',
            [endereco.logradouro,endereco.bairro,endereco.estado,endereco.numero,endereco.complemeto,endereco.cep]);
            console.log(insertEndereco)

        const insertPessoa = await connection.query('INSERT INTO tbl_pessoa (cpf,nome,data_nasc,genero,email) VALUES (?,?,?,?,?)',
            [pessoa.cpf, pessoa.nome, pessoa.data_nasc, pessoa.genero, pessoa.email]);
        console.log('RESULTADO INSERT PESSOA =>', insertPessoa);

        if (pacienteFuncionario == null) {
            await connection.query('INSERT INTO tbl_paciente() VALUES (?)',
            []);
        }else{

        }







        await connection.commit();
        console.log(res)
        return res
    } catch (error) {
        await connection.rollback();
        console.log(error);
        return (error);
    }
    finally {

        connection.end();

    }
}
module.exports = { insert }