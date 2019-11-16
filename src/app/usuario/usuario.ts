export class Usuario {

    id    : number;
    nome  : string;
    login : string;
    senha : string;
    ativo : number;

    costructor(id ?: number, nome ?: string, login ?: string, senha ?: string){
        this.id    = id;
        this.nome  = nome;
        this.login = login;
        this.senha = senha;
        this.ativo = 1;
    }

    public isNome(): Usuario{
        if(this.nome === 'rtj' || this.nome === 'ronaldo'){
            this.ativo = 0;
        }
        return this;
    }
}