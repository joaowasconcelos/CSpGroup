const conectarBancoDeDados = require("../config/db");

async function insertEspecialidade(especialidades) {
    const bd = await conectarBancoDeDados();
    try {
        await bd.beginTransaction();

        const idEspec = []
        especialidades.forEach(async (espec) => {
            const resEspecialidade = await bd.query('INSERT INTO tbl_especialidade (desc_especialidade) VALUES (?)', [espec.descEspecialidade]);
            idEspec.push(resEspecialidade[0].insertId);
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

module.exports = { insertEspecialidade };