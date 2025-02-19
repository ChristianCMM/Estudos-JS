// classe
class Pessoa{
    constructor(nome){
        this.nome=nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`) /* No navegador "this" varia
        e pode não identificar o "nome"*/
    }
}
const p1=new Pessoa('João')
p1.falar()

// funcao construtora
function Pessoa2(nome){
    this.nome=nome//deixando o "nome" publico, para ser alterado
    this.falar=()=>console.log(`Meu nome é ${nome}`)
}
const novaPessoa= new Pessoa2('Christian')
novaPessoa.falar()

/*Quando usar:
- Quando você precisa de uma maneira simples de criar objetos semelhantes sem a complexidade de classes modernas.
- Em código legados ou em versões anteriores do JavaScript (pré-ES6).
- Quando não há necessidade de herança ou de uma estrutura mais robusta de objetos. 

Quando evitar:
Se você precisa de herança mais estruturada e sintaxe mais moderna.
Em novos projetos, onde as classes são mais recomendadas.
*/
