function tranformandoEmBinario(numero){
    const numeroBinario1 = []
    let contador = 0
    do{
        numero = numero/2
        numeroBinario1.push((numero%2).toFloor())
        contador++
    }while(contador!=5)
    
    return numeroBinario1 
}
console.log(tranformandoEmBinario(19))