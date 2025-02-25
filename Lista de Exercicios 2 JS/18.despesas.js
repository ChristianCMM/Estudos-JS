const despesasTotais=meuArray=>{
    let novoArray=[]
    return meuArray.map(valor=>valor.preco).reduce(function(acumulador,atual){
        return acumulador+atual
    })    
}
console.log(despesasTotais([
    {nome:'Jornal', categoria:'informação', preco: 89.99},
    {nome:'Cinema', categoria:'Entretenimento', preco: 150}
]))

console.log(despesasTotais([
    {nome:'Galaxy S20', categoria:'eletronicos', preco: 3599.99},
    {nome:'Mackbook pro', categoria:'eletronicos', preco: 30999.90}
]))