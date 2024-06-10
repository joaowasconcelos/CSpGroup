class Consulta {
    constructor(pId, pData, pHora, pStatus) {
        this.id = pId;
        this.data = pData;
        this.hora = pHora;
        this.status = pStatus;
    }

    get Id() { return this.id; }
    set Id(sId) { this.id = sId; }

    get Data() { return this.data; }
    set Data(sData) { this.data = sData; }

    get Hora() { return this.hora; }
    set Hora(sHora) { this.hora = sHora; }

    get Status() { return this.status; }
    set Status(sStatus) { this.status = sStatus; }

    validaCampos(){
        return(
            this.data&&
            this.hora&&
            this.status
        )
    }

}

module.exports = Consulta;