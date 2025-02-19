function criarProduto(nome,preco,desconto=0.15){
    return{
        nome,
        preco,
        desconto
    }
}
console.log(criarProduto('melancia',1.39))
console.log(criarProduto('iPad',1199.49))