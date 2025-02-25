function maiorEMenor(numeros){
    let maioresNumeros=Math.min(...numeros)
    let menoresNumeros=Math.max(...numeros)
    console.log(maioresNumeros, menoresNumeros)
}
maiorEMenor([5,3,15,7,9,12])