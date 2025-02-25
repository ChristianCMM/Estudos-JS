const objetoParaArray=meuArray=>{
    return Object.entries(meuArray)
}
console.log(objetoParaArray({
    nome:'maria',
    profissao:'Desenvolvedora de Software'
}))
console.log(objetoParaArray({
    codigo:11111,
    preco: 12000
}))