function calculo(numero1,numero2,operacao){
    switch(operacao){
        case "/":
            return numero1/numero2
        case "*":
            return numero1*numero2
        case "+":
            return numero1+numero2
        case "-":
            return numero1-numero2
        default: 
            return "operação invalida!"
    }
}
console.log(calculo(2,2,"/"))
console.log(calculo(2,2,"*"))
console.log(calculo(2,2,"+"))
console.log(calculo(2,2,"-"))
console.log(calculo(2,2,"%"))