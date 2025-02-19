const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao) // acessando o parametro do proprio objeto
    }
}
pessoa.falar()
const falar = pessoa.falar 
falar()// conflitos entre paradigmas: funcional e Orientado a Objetos

const falarDePessoa = pessoa.falar.bind(pessoa) /*Amarra o THIS ao objeto selecionado */
falarDePessoa()// apenas essa sentença está fixado o BIND