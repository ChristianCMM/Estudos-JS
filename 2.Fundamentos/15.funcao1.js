//função sem retorno
function imprimirSoma(a,b){//variaveis são declaradas nesta linha
    console.log(a+b)
}
imprimirSoma(2,3)//chamando a função
imprimirSoma(2)// segundo numero é declarado como "Undefined"
imprimirSoma(2,10,4,5,6,7,8)//vai somar os 2 primeiros e o resto ignora
imprimirSoma()//NaN

// funcao com retorno
function soma(a,b = 1){ //valor padrão "=0"
    return a+b// resposta da função
}
console.log(soma(2,3))
console.log(soma(2))
console.log(soma())// NaN, pois o primeiro valor não é tratado