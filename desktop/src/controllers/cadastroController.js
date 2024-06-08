const Pessoa = require("../models/Pessoa")
const Endereco = require("../models/Endereco");
const Telefone = require("../models/Telefone");
const Funcionario = require("../models/Funcionario");
const Login = require("../models/Login");
const Perfis = require("../models/Perfis")
const Especialidade = require("../models/Especialidade")
const { insert } = require("../models/PessoaModel");
const {insertEspecialidade} = require("../models/EspecialidadeModel")

const cadastro = {
    adicionaPessoa: async (req, res) => {
        try {
            const { cpf, nome, dataNasc, genero, email, endereco: [{ logradouro, bairro, estado, numeroEndereco, complementoEndereco, cep }], telefone, funcionario: [{ dataAdmissao, crm }], Login: [{ login, senha, status }], Perfis: [{ tipo }],especialidade } = req.body;
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

            const objEspecialidade=[];

            if(especialidade.length > 0){
                especialidade.forEach(descEspec=>{
                    const novaEspecialidade = new Especialidade(null,descEspec._descEspecialidade);
                    objEspecialidade.push(novaEspecialidade)
                })
            }
            console.log("TESTE1",objEspecialidade);

            let novoFuncionario = null;
            let result = null;

            if (!novaPessoa.validaCampos() || !novoEndereco.validaCampos()||!novoLogin.validaCampos()||!novoPerfis.validaCampos()) {
                return res.json({ message: 'Todos os campos são obrigatórios.' });
            }

            if (dataAdmissao === null || dataAdmissao === undefined) {
                result = await insert(novaPessoa, novoEndereco, objTelefone,null,novoLogin,novoPerfis,null);
                return res.json({ message: "Paciente cadastrado com sucesso" });
            } else {
                novoFuncionario = new Funcionario(null, cpf, nome, dataNasc, genero, email, dataAdmissao, crm);
                novoFuncionario.DataConvert(dataAdmissao)
                if(!novoFuncionario.validaCampos())
                result = await insert(novaPessoa, novoEndereco, objTelefone, novoFuncionario,novoLogin,novoPerfis);
                result = await insertEspecialidade(objEspecialidade)
                return res.json({ message: "Funcionario cadastrado com sucesso" });
            }
        } catch (error) {
            console.log(error)
            res.json(error);
        }

    }
}
module.exports = { cadastro }