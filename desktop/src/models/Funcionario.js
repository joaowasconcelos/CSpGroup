const Pessoa = require("../models/Pessoa");

class Funcionario extends Pessoa {
    constructor(pId, pCpf, pNome, pDataNasc, pGenero, pEmail, pDataAdmissao, pCrm) {
        super(pId, pCpf, pNome, pDataNasc, pGenero, pEmail);
        this.crm = pCrm;

        if (pDataAdmissao === null) {
            this.dataAdmissao = pDataAdmissao;
        } else {
            this.dataAdmissao = this.DataConvert(pDataAdmissao);
        }
    }

    get DataAdmissao() { return this.dataAdmissao; }
    set DataAdmissao(sDataAdmissao) { this.dataAdmissao = sDataAdmissao; }

    get Crm() { return this.crm; }
    set Crm(sCRM) { this.crm = sCRM; }

    DataConvert(value) {
        let [dia, mes, ano] = value.split('/');
        let dataFormatada = `${ano}-${mes}-${dia}`;
        return dataFormatada; // Retornar a data formatada
    }

    validaCampos() {
        return (
            this.DataAdmissao &&
            this.crm
        )
    }
}

module.exports = Funcionario;
