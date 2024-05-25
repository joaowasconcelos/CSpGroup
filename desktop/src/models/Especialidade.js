class Especialidade {
    constructor(pId, pDescEspecialidade) {
        this.id = pId;
        this.descEspecialidade = pDescEspecialidade;
    }

    get Id() { return this.id; }

    get descEspecialidade() { return this.pDescEspecialidade; }
    set descEspecialidade(sDescEspecialidade) { this.descEspecialidade = sDescEspecialidade; }

    validaCampos() {
        return (
            this.descEspecialidade
        )
    }
}

module.exports = Especialidade;