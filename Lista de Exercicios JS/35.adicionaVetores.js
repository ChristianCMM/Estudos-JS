function adicionaPilha(pilha,adiciona){
    pilha=pilha.concat(adiciona)
    return pilha
}
console.log(adicionaPilha([1,2,3,4,5],[6,7,8,9,10]))