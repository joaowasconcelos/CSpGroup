const Pessoa = require("../models/Pessoa")
const Endereco = require("../models/Endereco");
const Telefone = require("../models/Telefone");
const Funcionario = require("../models/Funcionario");
const { insert, selectCPF } = require("../models/PessoaModel");

const cadastro = {
    adicionaPessoa: async (req, res) => {
        try {
            const { cpf, nome, dataNasc, genero, email, endereco: [{ logradouro, bairro, estado, numeroEndereco, complementoEndereco, cep }], telefone, funcionario: [{ dataAdmissao, crm }] } = req.body;
            const novaPessoa = new Pessoa(null, cpf, nome, dataNasc, genero, email)

            novaPessoa.DataConvert(dataNasc)
            const novoEndereco = new Endereco(null, logradouro, bairro, estado, numeroEndereco, complementoEndereco, cep);
            console.log(novoEndereco)

            const objTelefone = [];

            if (telefone.length > 0) {
                telefone.forEach(tel => {
                    console.log(tel)
                    const novoTelefone = new Telefone(null, tel.numeroTelefone);
                    if (!novoTelefone.telefone_validation(novoTelefone.numeroTelefone)) {
                        return res.json({ message: 'Numeros de Telefone invalido!' })
                    };
                    objTelefone.push(novoTelefone);
                });
            }

            let novoFuncionario = null;
            let result = null;

            // if (!novaPessoa.validaCampos()|| !novoEndereco.validaCampos() || !novoFuncionario) {
            //     return res.json({ message: 'Todos os campos são obrigatórios.' });
            // }

            const ValidaCPF = novaPessoa.selectCPF(cpf)
            console.log(ValidaCPF);
            if (ValidaCPF.length > 0) {
                return res.json({ message: 'CPF ja cadastrado!' })
            }
            if (dataAdmissao === null || dataAdmissao === undefined) {
                result = await insert(novaPessoa, novoEndereco, objTelefone, null);
                return res.status(404).json({ message: "Paciente cadastrado com sucesso" });
            } else {
                novoFuncionario = new Funcionario(null, cpf, nome, dataNasc, genero, email, dataAdmissao, crm);
                novoFuncionario.DataConvert(dataAdmissao)
                result = await insert(novaPessoa, novoEndereco, objTelefone, novoFuncionario);
                return res.status(404).json({ message: "Funcionario cadastrado com sucesso" });
            }
        } catch (error) {
            console.log(error)
            res.json(error);
        }

    }
}
module.exports = { cadastro }