class Funcionario extends Pessoa {
    constructor(pId, pCpf, pNome, pDataNasc, pGenero, pEmail, pLogradouro, pBairro, pEstado, pNumeroEndereco, pComplementoEndereco, pCep, pNumeroTelefone, pDataAdmissao, pCRM, pEspecialidade) {
        super(pId, pCpf, pNome, pDataNasc, pGenero, pEmail, pLogradouro, pBairro, pEstado, pNumeroEndereco, pComplementoEndereco, pCep, pNumeroTelefone);
        this.dataAdmissao = pDataAdmissao;
        this.crm = pCRM;
    }

    get DataAdmissao() { return this.dataAdmissao; }
    set DataAdmissao(sDataAdmissao) { this.dataAdmissao = sDataAdmissao; }

    get CRM() { return this.crm; }
    set CRM(sCRM) { this.crm = sCRM; }

    get Especialidades() { return this.especialidades; }
    set Especialidades(sEspecialidades) { this.especialidades = sEspecialidades; }

    validaCampos() {
        return (
            this.DataAdmissao &&
            this.CRM &&
            this.Especialidades
        )
    }
}

module.exports = Funcionario;