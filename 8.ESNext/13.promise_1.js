// quando declara uma promessa, será recebido algo no futuro, em forma de Objeto
// deve-se dar uma função como parametro para a Promise
// Promise gera apenas 1 valor, mesmo se receber 2 parametros

// recebendo 2 valores de uma promessa, com um Array
let promessa3 = new Promise(function(resolve){
    resolve([
        'Ana',
        'Bia',
        'Carlos',
        'Daniel'
    ])
})
function primeiroElemento(array){
    return array[0]
}
promessa3.then(primeiroElemento) // usando callback
    .then(primeiroIndice=>primeiroIndice[0])
    .then(primeiraLetra=>primeiraLetra[0])
    .then(letraMinuscula=>letraMinuscula.toLowerCase())
    .then(console.log)// imprimi o valor do ultimo '.then" 


//---------------------------------------------------

// recebendo 2 valores de uma promessa, com um Objeto
let promessa2 = new Promise(function(cumprirPromessa){
    cumprirPromessa({
        x:3,
        y:4
    })
})
// para acessar o que foi devolvido pela Promise, deve-se usar o ".then"
promessa2.then((valor)=>console.log(valor.x,valor.y))// Arrow function

//---------------------------------------------------


let promessa = new Promise(function(cumprirPromessa){
    cumprirPromessa(3)
})
// para acessar o que foi devolvido pela Promise, deve-se usar o ".then"
promessa.then(function(valor){ // função normal
    console.log(valor)
})
