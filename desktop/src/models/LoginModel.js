const conectarBancoDeDados = require("../config/db");

async function selectLogin(login) {
    console.log('HELP MODEL=>', login);
    const bd = await conectarBancoDeDados();
    try {
        // console.log(objLogin.login, objLogin.senha);
        // await bd.beginTransaction();
        const selectLogin = await bd.query(`
            SELECT 
                p.id,
                lo.id AS idLogin,
                lo.login,
                lo.senha,
                pe.tipo
            FROM
                tbl_login AS lo
            INNER JOIN tbl_perfis AS pe
            ON lo.id= pe.login_id
            inner join tbl_pessoa AS p
            ON lo.pessoa_id=p.id
            WHERE p.cpf = ?`, [login]);
         
         return selectLogin;
    }
    catch (error) {


        console.error('Erro ao consultar o banco de dados:', error);
        res.status(500).json({ success: false, message: 'Erro no servidor' });
        return;

    }
}


module.exports = { selectLogin }
