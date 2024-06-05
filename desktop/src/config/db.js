// const mysql2 = require("mysql2/promise");

// const connection = async () => {
//     if (global.connection && global.connection.state !== 'disconnected') {
//         return global.connection;
//     }
//     const con = await mysql2.createConnection({
//         host: 'localhost',
//         port: '3306',
//         database: 'clinica',
//         user: 'root',
//         password: '1234',
//         multipleStatements:true 
//     });
//     console.log("Conectou no MySQL!");
//     global.connection = con;
//     return con;
// }

// module.exports =  connection ;

const { createPool } = require("mysql2/promise")

let pool = null;

async function criarPoolDeConexoes() {
    if (!pool) {
        pool = createPool({
            host: 'localhost',
            port: '3306',
            database: 'clinica',
            user: 'root',
            password: '1234',
            waitForConnections: true, // Aguarda conexões se não houver disponíveis no momento
            connectionLimit: 10, // Limite máximo de conexões no pool
            multipleStatements: true // Permitir a execução de várias queries ao mesmo tempo
        });
    }
    return pool;
}

async function obterConexaoDoPool() {
    const pool = await criarPoolDeConexoes();
    return pool.getConnection();
}

module.exports = obterConexaoDoPool;