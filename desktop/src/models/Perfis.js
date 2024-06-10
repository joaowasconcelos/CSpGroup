class Perfis {
    constructor(pid, ptipo, ploginId) {
        this.id = pid;
        this.tipo = ptipo;
        this.loginId = ploginId;
    }
    get Id() { return this.id; }

    get Tipo() { return this.tipo; }
    set Tipo(sTipo) { this.tipo = sTipo; }

    get loginId() {return this.loginId;}

    validaCampos(){
        return(
            this.Tipo
        )
    }

}

module.exports = Perfis
