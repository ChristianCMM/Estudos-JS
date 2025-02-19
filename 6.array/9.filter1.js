// percorrer um array -> usar MAP
// filtrar um elemento do array -> usar FILter
function produtoFragil(produto){
    return produto.fragil // já retorna "true" ou "false" não necessário "=="
}
function produtoCaro(produto){
    return produto.preco > 500
}

const produtos=[
    {nome:'Noteboom', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]
console.log(produtos.filter(function(produto){ // retorna "true" ou "false"
    return produto.preco > 2500
}))

console.log(produtos.filter(produtoCaro).filter(produtoFragil)) // resultado do desafio