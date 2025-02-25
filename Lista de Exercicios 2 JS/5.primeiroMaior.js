const maiorOuIgual=(valor1,valor2)=>{
    if(valor1>valor2||valor1==valor2)
        return true
    if(valor2>valor1)
        return false
}
console.log(maiorOuIgual(0,'0'))
console.log(maiorOuIgual(5,3))
console.log(maiorOuIgual(3,5))