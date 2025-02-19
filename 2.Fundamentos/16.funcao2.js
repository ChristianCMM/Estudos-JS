// armazenando uma função em uma variavel
const imprimirSoma = function (a,b){ //função anonima
    console.log(a+b)
}
imprimirSoma(2,3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a,b) =>{ // "=>" substitui a palavra "function"
    return a+b
}

console.log(soma(2,3))

// retorno impricito 
const subtracao =(a,b) => a-b // sem as {} é uma função de 1 linha
console.log(subtracao(2,3))

const imprimir2= a=>console.log(a)
imprimir2('Legal!!')