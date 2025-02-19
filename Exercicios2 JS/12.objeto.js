function removerPropriedade(objeto,propriedadeRemovida){
    const novoObjeto = new Object(objeto)
    delete novoObjeto[propriedadeRemovida]
    return novoObjeto
}

console.log(removerPropriedade({a:1,b:2},'a'))
console.log(removerPropriedade({
    id:20,
    nome:'Caneta',
    descricao:'Não Preenchido'
},'descricao'))