//pessoa -> 123 (endereço de memoria) -> {...}
const pessoa ={nome:'João'}
pessoa.nome='Pedro' /* não altera o endereço de memoria (referencia que 
    é constante), apenas muda os parametros*/ 
console.log(pessoa)

// pessoa -> 456 (endereço de memoria) -> {...}  
// não pode alterar o endereço de memoria, pois apresenta erro
// pessoa = {nome: 'Ana'} // erro

Object.freeze(pessoa) // congela o objeto

pessoa.nome='Maria'// não funciona depois do "freeze"
pessoa.end='Rua ABC'// não funciona depois do "freeze"
delete pessoa.nome// não funciona depois do "freeze"

console.log(pessoa.nome) // não é alterado para "Maria", permanece "Pedro"
console.log(pessoa)

const pessoaConstante=Object.freeze({nome:'Joao'})// instanciando o objeto congelado
pessoaConstante.nome='Maria' // não funciona depois do "freeze"
console.log(pessoaConstante)