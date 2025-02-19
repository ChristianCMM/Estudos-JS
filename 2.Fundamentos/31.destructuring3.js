// função que gera um numero aleatorio
function rand({min=0, max=1000}){ // 0  e 1000, são VALORES PADRÃO
    const valor = Math.random()*(max-min)+min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40} 
console.log(rand(obj))
console.log(rand({min: 100}))
console.log(rand({}))
console.log(rand()) /* apresenta erro, pois tenta desestrururar um valor
    "undefined"*/