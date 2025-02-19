// classe ("this" varia)
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

/*Quando usar Classes:
- Quando você deseja um design mais moderno e organizado, especialmente se você estiver trabalhando com herança.
- Se o seu código requer uma estrutura de POO (Programação Orientada a Objetos).
- Em projetos que utilizam sintaxe ES6+ ou TypeScript.

Vantagens:
- Sintaxe mais clara e intuitiva.
- Suporte fácil para herança com extends e o método super().
- Melhor compatibilidade com padrões modernos de desenvolvimento.

Quando evitar:
- Se o seu ambiente ou projeto é pré-ES6 e não suporta classes.
- Se o uso de classes e herança é desnecessário e o código simples funcionaria com funções mais básicas.
*/


//------------------------------------------------------


//função construtora ("this" não varia)
const criarPessoa = nome=>{
    return {
        /* no navegador, o erro da linha 7 não ocorre */
        falar: ()=>console.log(`meu nome é ${nome}`)
    }
}

const p2=criarPessoa('João')
p2.falar()

