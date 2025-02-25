const receberPrimeiroEUltimoElemento=valor=>{
    const novoArray=[]
    novoArray.push(valor.shift())
    novoArray.push(valor.pop())
    return novoArray
}
console.log(receberPrimeiroEUltimoElemento([7,14,'Olá']))
console.log(receberPrimeiroEUltimoElemento([-100,'Aplicativo',16]))