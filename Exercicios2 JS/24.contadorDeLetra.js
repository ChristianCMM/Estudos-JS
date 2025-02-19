const contarCaractere=(letra,frase='')=>{
    let contador=0
    Array.from(frase).forEach(l => {
        if(l==letra){
            contador++
        }
    })
    return contador
}
console.log(contarCaractere('r', 'A sorte favorece os audazes'))
console.log(contarCaractere('c', 'Conhece-te a ti mesmo'))