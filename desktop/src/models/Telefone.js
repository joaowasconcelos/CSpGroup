class Telefone{
    constructor(pId,pNumeroTelefone ){
        this.id = pId
        this.numeroTelefone = pNumeroTelefone;
    }

    get Id() { return this.id; }
    set Id(sId) { this.id = sId; }

    get NumeroTelefone() { return this.numeroTelefone; }
    set NumeroTelefone(sNumeroTelefone) { this.numeroTelefone = sNumeroTelefone; }
}

module.exports = Telefone;
