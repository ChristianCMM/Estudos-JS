Array.prototype.filter2=function(callback){
    const newArray=[]
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

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

console.log(produtos.filter2(produtoCaro).filter2(produtoFragil)) // resultado do desafio