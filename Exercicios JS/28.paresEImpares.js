const resultado=[]
function parOuImpar(numeros){
    numeros.forEach((numeros) => {
        if(numeros%2==0){
            resultado.push('Par')
        }else{
            resultado.push('impar')
        }
    });
    console.table(resultado)
}
parOuImpar([1,2,3,4,5,6])