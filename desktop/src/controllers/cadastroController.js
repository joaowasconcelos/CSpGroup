const Pessoa = require("../models/Pessoa");
const Endereco = require("../models/Endereco");
const Telefone = require("../models/Telefone");
const Funcionario = require("../models/Funcionario");
const {insert} = require("../models/PessoaModel");

const cadastro = {
    adicionaPessoa: async (req, res) => {
        try {
            const { cpf, nome, data_nasc, genero, email, endereco: [logradouro, bairro, estado, numero, complemento, cep], telefone, funcionario: [data_admissao, crm] } = req.body;

            const novaPessoa = new Pessoa(null,cpf, nome, data_nasc, genero, email );
            const novoEndereco = new Endereco(logradouro, bairro, estado, numero, complemento, cep);

            const objTelefone = []

            if (telefone.length > 0) {
                telefone.forEach(value => {
                    objTelefone.push(new Telefone(value));
                });
            }

            let novoFuncionario = null;
            let result = null

            if (novaPessoa.validaCampos() && novoEndereco.validaCampos() && objTelefone.validaCampos()&& novoFuncionario.validaCampos()) {
                return res.json({ message: 'Todos os campos são obrigatórios.' });
            }
            if (data_admissao == null) {                
                result = await insert(novaPessoa, novoEndereco, objTelefone, null);
                console.log(result)
            }else{
                novoFuncionario = new Funcionario(data_admissao, crm);
                result = await insert(novaPessoa, novoEndereco, objTelefone, novoFuncionario);
                console.log(result)
            }
            return res.json(result);

        } catch (error) {
            console.log(error)
            res.json(error);
        }

    }
}

module.exports = { cadastro }