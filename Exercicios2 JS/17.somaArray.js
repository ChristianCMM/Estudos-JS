const funcaoQueSoma=(soma,valor)=> soma+valor

const somarNumeros=meuArray=>meuArray.reduce(funcaoQueSoma)

console.log(somarNumeros([10,10,10]))
console.log(somarNumeros([15,15,15,15]))