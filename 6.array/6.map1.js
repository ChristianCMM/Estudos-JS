// MAP transforma um array em outro com os dados "transformados", mas não modifica o array atual
const nums=[1,2,3,4,5]
// MAP = for com "propósito"
let resultado = nums.map(function(e){ // "e" =  elemento do array
    return e*2
})

console.log(resultado)

const soma10 = e => e+10
const triplo = e => e*3
const paraDinheiro = e=> `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` 

resultado=nums.map(soma10).map(triplo).map(paraDinheiro) // é possivel chamar mais de um "map" 
console.log(resultado)