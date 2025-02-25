const simboloMais=repeticoes=>{
    let novaString=''
    while(repeticoes>0){
        novaString=novaString.concat('+')
        repeticoes--
    }
    return novaString
}
console.log(simboloMais(2))
console.log(simboloMais(4))