const fabricante = ['Mercedes', 'Audi','BMW']
function imprimir(nome,indice){
    console.log(`${indice+1}. ${nome}`)
}


//callback da função 
fabricante.forEach(imprimir) // "forEach" função do ARRAY
fabricante.forEach(function(fabricante){
    console.log(fabricante)
})