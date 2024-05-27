class Pessoa {
    constructor(pId, pCpf, pNome, pDataNasc, pGenero, pEmail) {
        this.id = pId
        this.cpf = pCpf;
        this.nome = pNome;
        this.dataNasc = pDataNasc;
        this.genero = pGenero;
        this.email = pEmail;
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


    DataConvert(value) {
        let [dia, mes, ano] = value.split('/'); 
        let dataFormatada = `${ano}-${mes}-${dia}`;
        this.dataNasc = dataFormatada;
    }

    validaCampos(){
        return(
            this.cpf&&
            this.nome&&
            this.dataNasc&&
            this.genero&&
            this.email
        )
    }
}


module.exports = Pessoa;