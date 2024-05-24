class Telefone{
    constructor(pId,pNumeroTelefone ){
        this.id = pId
        this.numeroTelefone = pNumeroTelefone;
    }

    get Id() { return this.id; }

    get NumeroTelefone() { return this.numeroTelefone; }
    set NumeroTelefone(sNumeroTelefone) { this.numeroTelefone = sNumeroTelefone; }
    
    validaCampos(){
        return(
            this.numeroTelefone
        )
    }
}

module.exports = Telefone;
