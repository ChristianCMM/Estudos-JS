function soBoaNoticia(nota){
    if(nota>=7){
        console.log('Aprovado com '+ nota)
    }
}
soBoaNoticia(8.1)
soBoaNoticia(6.1) //não apresenta nada, pois não há outra condição

function seForVerdadeiroEuFalo(valor){
    if(valor){ //como não há outro valor, o valor espera uma booleana(true)
        console.log('É verdade...'+valor)
    }
}
seForVerdadeiroEuFalo()//undefined = false
seForVerdadeiroEuFalo(null)//null = false
seForVerdadeiroEuFalo(undefined)//undefined = false
seForVerdadeiroEuFalo(NaN)//NaN = false
seForVerdadeiroEuFalo('')//'' = false
seForVerdadeiroEuFalo(0)//0 = false

seForVerdadeiroEuFalo(["array vazio"])// '[]' = true
seForVerdadeiroEuFalo(-1)// -1 = true
seForVerdadeiroEuFalo('String com espaço',)// ' ' = true
seForVerdadeiroEuFalo('?')// '?' = true
seForVerdadeiroEuFalo([1,2])// [1,2] = true
seForVerdadeiroEuFalo({})// Objeto vazio = true