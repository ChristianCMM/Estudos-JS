
function adicionandoArray(valores){
    const minhaArray=[]
    for(let i=0;i<valores.length;i++){
        if(valores[i]==Math.max(...valores)){
            minhaArray.push(valores[i])
        }
    }
    return minhaArray
}
const [maiorValor]=adicionandoArray([1,2,3,4,5,9,45,45,7])
console.log(`O maior valor do array é: ${maiorValor}`)