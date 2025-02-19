// let e const
{
    var a = 2
    let b = 3
    console.log(b) // acessa ( escopo de bloco)
}
console.log(a) // acessa variavel (escopo global)
// console.log(b) // não acessa variavel (escopo de bloco)

// template string
const produto = "iPad"
console.log(`${produto} é caro!`)

// Destructuring

const [l, e,...tras] = "Cod3r"
console.log(l,e,tras)

const [x,,y] = [1,2,3]
console.log(x,y)

const {idade, nome} = {nome: 'Ana', idade: 9}
console.log(idade, nome)