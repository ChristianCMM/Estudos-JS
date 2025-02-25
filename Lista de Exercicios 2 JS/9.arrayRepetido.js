const repetir=(valor,repeticoes)=>{
    const novoArray=[]
    while(repeticoes>0){
        novoArray.push(valor)
        repeticoes--
    }
    return novoArray
}
console.log(repetir("código",2))
console.log(repetir(7,3))