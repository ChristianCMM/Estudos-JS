function aumentoSalario(plano,salario){
    switch (plano){
        case "a":
            return salario*0.10
        case "b":
            return salario*0.15
        case "c":
            return salario*0.20
        default: 
            return "plano inválido!"
    }
}
console.log("Seu aumento será de: ",aumentoSalario("a",1000))
console.log("Seu aumento será de: ",aumentoSalario("b",1000))
console.log("Seu aumento será de: ",aumentoSalario("c",1000))
console.log(aumentoSalario("d",1000))