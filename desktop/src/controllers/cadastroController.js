const Pessoa = require("../models/Pessoa")
const Endereco = require("../models/Endereco");
const Telefone = require("../models/Telefone");
const Funcionario = require("../models/Funcionario");
const { insert } = require("../models/PessoaModel");

const cadastro = {
    adicionaPessoa: async (req, res) => {
        try {
            const { cpf, nome, dataNasc, genero, email, endereco: [{ logradouro, bairro, estado, numeroEndereco, complementoEndereco, cep }], telefone, funcionario: [{ dataAdmissao, crm }] } = req.body;
            const novaPessoa = new Pessoa(null, cpf, nome, dataNasc, genero, email);
            novaPessoa.validarCPF(cpf)
            novaPessoa.DataConvert(dataNasc)
            
            const novoEndereco = new Endereco(null, logradouro, bairro, estado, numeroEndereco, complementoEndereco, cep);
            //const objTelefone = telefone.map(tel => new Telefone(null, tel.numeroTelefone));
            
            const objTelefone = [];

            if (telefone.length > 0) {
                telefone.forEach(telefoneObj => {
                    const novoTelefone = new Telefone(null, telefoneObj.numeroTelefone);
                    objTelefone.push(novoTelefone);
                });
            }
            

            let novoFuncionario = null;
            let result = null
            // if (!novaPessoa.validaCampos() || !novoEndereco.validaCampos() || !objTelefone.validaCampos() || !novoFuncionario.validaCampos()) {
            //     return res.json({ message: 'Todos os campos são obrigatórios.' });
            // }
        
            if (dataAdmissao === null && dataAdmissao === undefined) {
            console.log("testedataadmissão",dataAdmissao)
                result = await insert(novaPessoa, novoEndereco, objTelefone, null);
            } else {
                novoFuncionario = new Funcionario(null, cpf, nome, dataNasc, genero, email,dataAdmissao, crm );
                novoFuncionario.DataConvert(dataAdmissao)
                result = await insert(novaPessoa, novoEndereco, objTelefone, novoFuncionario);
            }
        } catch (error) {
            console.log(error)
            res.json(error);
        }

    }
}
module.exports = { cadastro }