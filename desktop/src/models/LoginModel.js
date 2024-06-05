const conectarBancoDeDados = require("../config/db");

async function insertLogin() {
    const bd = conectarBancoDeDados()
    try {
        await bd.beginTransaction()



        
    }
    catch (error) {
        await bd.rollback();
        console.log('Erro na transação:', error);
        return { error: 'Falha na transação', details: error };
    } finally {
        bd.release();
    }
}

module.exports = {insertLogin}