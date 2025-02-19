// novo recurso do ES2015
const pessoa = {
    nome:'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
} 
//desestruturando os parametros "nome" e "idade" de "pessoa" 
const { nome, idade } = pessoa
console.log(nome,idade) // atribui os valores ao seus respectivos nomes

const { nome: n, idade: i} = pessoa /*atribuindo os valores dos parametros
para outras variaveis ("i" e "n")*/

console.log(n,i)

const { sobrenome, bemHumorado= true} = pessoa
console.log(sobrenome, bemHumorado)

const {endereco:{logradouro, numero, cep}} = pessoa
console.log(logradouro,numero,cep)