function numerosNegativos(numeros){
    let negativos=0
    for(let i=0;i<=numeros.length;i++){
        if(numeros[i]<0){
            negativos++
        }
    }
    return `há ${negativos} numeros negativos`
}
console.log(numerosNegativos([2,6,47,-2,-15]))