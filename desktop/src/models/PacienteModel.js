const conectarBancoDeDados = require("../config/db");

//SELECT INFOS PESSOAIS
async function selectInfosPaciente(id) {
    const bd = await conectarBancoDeDados();
    try {
        const selectInfosPaciente = await bd.query(`
            SELECT 
                p.nome AS Nome,
                p.cpf AS CPF,
                p.data_nasc AS DataNascimento,
                p.genero AS Genero,
                p.email AS Email,
                e.logradouro AS Logradouro,
                e.bairro AS Bairro,
                e.estado AS Estado,
                e.numero AS NumeroResidencia,
                e.complemento AS Complemento,
                e.cep AS CEP,
                t.numero AS Telefone
            FROM
                tbl_pessoa p
            INNER JOIN 
                tbl_endereco e ON p.id = e.id
            INNER JOIN 
                tbl_telefone t ON p.id= t.id
            WHERE p.id=?; `, [id]);
        return selectInfosPaciente
    } catch (error) {
        throw error;
    }
}


//SELECT CONSULTAS

async function selectConsultas(id) {
    const bd = await conectarBancoDeDados();
    try {
        const selectConsultas = await bd.query(`
            SELECT 
                c.data AS Data,
                c.hora AS Hora,
                p.nome AS NomeMedico,
                e.desc_especialidade AS Especialidade
            FROM
                tbl_consulta c
            INNER JOIN 
                tbl_pessoa p ON c.funcionario_id = p.id
            INNER JOIN
                tbl_funcionario_has_tbl_especialidade fe ON c.especialidade_id= fe.especialidade_id
            INNER JOIN
                tbl_especialidade e ON c.especialidade_id= e.id
            WHERE  c.id=?;`, [id]);
        return selectConsultas;
    } catch (error) {
        throw error;
    }
}

module.exports = { selectInfosPaciente, selectConsultas };