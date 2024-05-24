class Login {
    constructor(pId, pLogin, pSenha, pStatus) {
        this.id = pId;
        this.login = pLogin;
        this.senha = pSenha;
        this.status = pStatus;
    }

    get Id() { return this.id; }

    get Login() { return this.login; }
    set Login(sLogin) { this.login = sLogin; }

    get Senha() { return this.senha; }
    set Senha(sSenha) { this.senha = sSenha; }

    get Status() { return this.status; }
    set Status(sStatus) { this.status = sStatus; }

    validaCampos(){
        return(
            this.Login&&
            this.Senha&&
            this.status
        )
    }
}

module.exports = Login;