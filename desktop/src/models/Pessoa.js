class Pessoa {
    constructor(pId, pCpf, pNome, pDataNasc, pGenero, pEmail,pData_cad) {
        this.id = pId
        this.cpf = pCpf;
        this.nome = pNome;
        this.dataNasc = pDataNasc;
        this.genero = pGenero;
        this.email = pEmail;
        this.dataCad = pData_cad;
    }

    get Id() { return this.id; }

    get Cpf() { return this.cpf; }
    set Cpf(sCpf) { this.cpf = sCpf; }

    get Nome() { return this.nome }
    set Nome(sNome) { this.nome = sNome; }

    get DataNasc() { return this.dataNasc }
    set DataNasc(sDataNasc) { this.dataNasc = sDataNasc; }

    get Genero() { return this.genero }
    set Genero(sGenero) { this.genero = sGenero; }

    get Email() { return this.email }
    set Email(sEmail) { this.email = sEmail; }

    get DataCad() { return this.dataCad }
  

    validaCampos(){
        return(
            this.cpf&&
            this.nome&&
            this.dataNasc&&
            this.genero&&
            this.email&&
            this.DataCad
        )
    }
}


module.exports = {Pessoa};