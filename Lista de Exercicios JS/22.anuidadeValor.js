function calculoAnuidade(mes){
    switch(mes){
        case 1:
            return 1000*0.05
        case 2:
            return 1000*0.10
        case 3:
            return 1000*0.15
        case 4:
            return 1000*0.20
        case 5:
            return 1000*0.25
        case 6:
            return 1000*0.30
        case 7:
            return 1000*0.35
        case 8:
            return 1000*0.40
        case 9:
            return 1000*0.45
        case 10:
            return 1000*0.50
        case 11:
            return 1000*0.55
        case 12:
            return 1000*0.60
    }
}
console.log(calculoAnuidade(1))
console.log(calculoAnuidade(2))
console.log(calculoAnuidade(3))
console.log(calculoAnuidade(4))
console.log(calculoAnuidade(5))
console.log(calculoAnuidade(6))
console.log(calculoAnuidade(7))
console.log(calculoAnuidade(8))
console.log(calculoAnuidade(9))
console.log(calculoAnuidade(10))
console.log(calculoAnuidade(11))
console.log(calculoAnuidade(12))