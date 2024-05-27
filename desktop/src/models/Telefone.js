class Telefone {
    constructor(pId, pNumeroTelefone) {
        this.id = pId;
        this.numeroTelefone = pNumeroTelefone || [];
    }

    get Id() { return this.id; }

    get NumerosTelefone() { return this.numeroTelefone; }
    set NumerosTelefone(sNumeroTelefone) { this.numeroTelefone = sNumeroTelefone; }

    adicionarNumeroTelefone(numeroTelefone) {
        this.numerosTelefone.push(numeroTelefone);
    }

    removerNumeroTelefone(numeroTelefone) {
        this.numerosTelefone = this.numerosTelefone.filter(tel => tel !== numeroTelefone);
    }

    validaCampos() {
        return this.numeroTelefone.length > 0;
    }
}

module.exports = Telefone;
