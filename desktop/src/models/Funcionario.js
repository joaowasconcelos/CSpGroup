const Pessoa = require("../models/Pessoa")

class Funcionario extends Pessoa {
    constructor(pId, pCpf, pNome, pDataNasc, pGenero, pEmail, pLogradouro, pBairro, pEstado, pNumeroEndereco, pComplementoEndereco, pCep, pNumeroTelefone, pDataAdmissao, pCRM) {
        super(pId, pCpf, pNome, pDataNasc, pGenero, pEmail, pLogradouro, pBairro, pEstado, pNumeroEndereco, pComplementoEndereco, pCep, pNumeroTelefone);
        this.dataAdmissao = pDataAdmissao;
        this.crm = pCRM;
    }

    get DataAdmissao() { return this.dataAdmissao; }
    set DataAdmissao(sDataAdmissao) { this.dataAdmissao = sDataAdmissao; }

    get CRM() { return this.crm; }
    set CRM(sCRM) { this.crm = sCRM; }

    validaCampos(){
        return(
            this.dataAdmissao&&
            this.crm
        )
    }
}

module.exports = Funcionario;