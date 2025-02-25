function convenioIdade(idade){
    if(idade<10){
        return "valor pago: 180 reais"
    }else if(idade>=10&&idade<=30){
        return "valor pago: 150 reais"
    }else if(idade>30&&idade<60){
        return "valor pago: 195 reais"
    }else{
        return "valor pago: 130 reais"
    }
}
console.log(convenioIdade(5))
console.log(convenioIdade(15))
console.log(convenioIdade(35))
console.log(convenioIdade(65))