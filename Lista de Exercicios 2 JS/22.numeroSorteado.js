const sortearNumero=numero=>{
    let numeroSorteado
    numeroSorteado=Math.floor(Math.random()*(10-0+1))
    if(numero==numeroSorteado){
        return `Parabéns! O numero sorteado foi ${numeroSorteado}!`
    }else{
        return `Que pena! O número sorteado foi ${numeroSorteado}`
    }
}
console.log(sortearNumero(7))
console.log(sortearNumero(10))
console.log(sortearNumero(5))