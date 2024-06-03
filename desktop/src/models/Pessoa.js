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

    validaCampos() {
        return (
            this.nome &&
            this.dataNasc &&
            this.genero &&
            this.email
        )
    }

    validarCPF(cpf) {
        var Soma;
        var Resto;
        Soma = 0;
        if (cpf == "00000000000") return false + " CPF invalido!";

        for (i = 1; i <= 9; i++) {
            Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
        Resto = (Soma * 10) % 11;
        console.log(Resto);

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(cpf.substring(9, 10))) return false + " CPF invalido!";

        Soma = 0;
        for (i = 1; i <= 10; i++) {
            Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(cpf.substring(10, 11))) return false + " CPF invalido!";
        return true + " CPF valido!";
    }
}


module.exports = Pessoa;