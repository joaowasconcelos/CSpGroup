const Pessoa = require("../models/classes/Pessoa")
const Endereco = require("../models/classes/Endereco");
const Telefone = require("../models/classes/Telefone");
const Funcionario = require("../models/classes/Funcionario");
const Login = require("../models/classes/Login");
const Perfis = require("../models/classes/Perfis")
const Especialidade = require("../models/classes/Especialidade")
const { insert } = require("../models/PessoaModel")


const cadastro = {
    // paginaCadastro: async (req, res) => {
    //     try {
    //         res.render('pages/Cadastro');
    //     }
    //     catch (error) {
    //         console.log(error);
    //         res.render('pages/pag_erro', { message: error });
    //     }


    // },
    // paginaLogin: async (req, res) => {
    //     try {
    //         res.render('pages/Login');
    //     }
    //     catch (error) {
    //         console.log(error);
    //         res.render('pages/pag_erro', { message: error });
    //     }


    // }


    adicionaPessoa: async (req, res) => {
        try {
            const { cpf, nome, dataNasc, genero, email, endereco: [{ logradouro, bairro, estado, numeroEndereco, complementoEndereco, cep }], telefone, funcionario: [{ dataAdmissao, crm }], Login: [{ login, senha, status }], Perfis: [{ tipo }], Especialidade: [{ descEspecialidade }] } = req.body;
            console.log(req.body)
            const novaPessoa = new Pessoa(null, cpf, nome, dataNasc, genero, email);
            const dataVal = novaPessoa.DataConvert(novaPessoa.dataNasc);
            if (dataVal == "Invalid Date" || !(new Date(novaPessoa.dataNasc) instanceof Date)) {
                return res.json({ message: "Data informada é invalida" });
            }
            const novoEndereco = new Endereco(null, logradouro, bairro, estado, numeroEndereco, complementoEndereco, cep);
            const novoLogin = new Login(null, login, senha, status, null, null);
            const novoPerfis = new Perfis(null, tipo, null, null, null);


            const objTelefone = [];

            if (telefone.length > 0) {
                telefone.forEach(tel => {
                    const novoTelefone = new Telefone(null, tel.numeroTelefone);
                    objTelefone.push(novoTelefone);
                });
            }


            let novoFuncionario = null;
            let result = null;

            if (!novaPessoa.validaCampos() || !novoEndereco.validaCampos() || !novoLogin.validaCampos() || !novoPerfis.validaCampos()) {
                return res.json({ message: 'Todos os campos são obrigatórios.' });
            }

            if (dataAdmissao === null || dataAdmissao === undefined) {
                result = await insert(novaPessoa, novoEndereco, objTelefone, null, novoLogin, novoPerfis, null);
                return res.json({ message: "Paciente cadastrado com sucesso" });
            } else {
                novoFuncionario = new Funcionario(null, cpf, nome, dataNasc, genero, email, dataAdmissao, crm);
                novoFuncionario = new Funcionario(null, cpf, nome, dataNasc, genero, email, dataAdmissao, crm);
                novoFuncionario.DataConvert(dataAdmissao)

                if (descEspecialidade === null || descEspecialidade === undefined) {
                    return res.json({ message: "Especialidade não cadastrada" });

                }
                const novaEspecialidade = new Especialidade(null, descEspecialidade);

                if (!novoFuncionario.validaCampos()) {
                    return res.json({ message: 'Todos os campos são obrigatórios.' });
                }
                result = await insert(novaPessoa, novoEndereco, objTelefone, novoFuncionario, novoLogin, novoPerfis, novaEspecialidade);
                return res.json({ message: "Funcionario cadastrado com sucesso" });

            }
        } catch (error) {
            console.log(error)
            res.json(error);
        }
    }
}

module.exports = { cadastro }