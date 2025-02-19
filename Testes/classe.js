class Pessoa{
    constructor(nome,idade){
        this.getNome=nome
        this.getIdade=idade
    }
}
const novaPessoa=new Pessoa('Christian', 23)
console.log(novaPessoa.getNome)