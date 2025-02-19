const soma = function (x,y){
    return x + y
}
const imprimirResultado = function (a,b,operacao=soma){ //"soma" é o valor padrão
    console.log(operacao(a,b))
}
imprimirResultado(3,4)/* como não foi apresentado nenhum valor para
    A e B, foi chamada a função "soma", onde consta como "7" */
imprimirResultado(3,4,soma)// chamando a função explicitamente
imprimirResultado(3,4, function(x,y){
    return x-y
})
imprimirResultado(3,4,(x,y)=>x*y) // arrow function

const pesosa = {
    falar: function(){
        console.log('opa')
    }
}
pesosa.falar()