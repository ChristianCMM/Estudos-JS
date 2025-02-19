const numeros=[]
function numerosNoIntervalo(numeros){
    let numerosDentroDoIntervalo=0
    let numerosForaDoIntervalo=0
    for(let i=1;i<=numeros.length;i++){
        if(numeros[i]>=10&&numeros[i]<=20){
            numerosDentroDoIntervalo++
        }else{
            numerosForaDoIntervalo++
        }
    }
    return `${numerosDentroDoIntervalo} dentro do Intervalo,${numerosForaDoIntervalo} fora do Intervalo.`
}
console.log(numerosNoIntervalo([3,3,3,3,3,3,15]))