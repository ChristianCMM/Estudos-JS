function rand([min=0, max=1000]){
    if (min>max) [min,max] = [max,min]
    const valor = Math.random * (max-min) + min
    return Math.floor(valor)
}
console.log(rand([50,40]))
console.log(rand([992]))// primeiro valor 992 e segundo valor 1000(padrão)
console.log(rand([,10]))
console.log(rand([]))
console.log(rand()) // gera erro pois tenta desestruturar um valor "undefined"