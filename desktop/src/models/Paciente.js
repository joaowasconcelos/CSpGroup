class Paciente extends Pessoa {
    constructor(pId, pCpf, pNome, pDataNasc, pGenero, pEmail, pLogradouro, pBairro, pEstado, pNumeroEndereco, pComplementoEndereco, pCep, pNumeroTelefone) {
        super(pId, pCpf, pNome, pDataNasc, pGenero, pEmail, pLogradouro, pBairro, pEstado, pNumeroEndereco, pComplementoEndereco, pCep, pNumeroTelefone);
    }
}

module.exports = Paciente;