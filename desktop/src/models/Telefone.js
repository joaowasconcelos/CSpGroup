class Telefone {
    constructor(pId, pNumeroTelefone) {
        this.id = pId;
        this.numeroTelefone = pNumeroTelefone || [];
    }

    get Id() { return this.id; }

    get NumerosTelefone() { return this.numeroTelefone; }
    set NumerosTelefone(sNumeroTelefone) { this.numeroTelefone = sNumeroTelefone; }

    validaCampos() {
        return this.numeroTelefone;
    }
}

module.exports = Telefone;
