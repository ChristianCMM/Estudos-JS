let valor // não inicializada
console.log(valor)
valor = null // não aponta para nenhum valor de memoria (Ausencia de valor)
console.log(valor)
// console.log(valor.toString()) -> Apresenta erro

const produto = {}
console.log(produto.preco)/* undefined, pois não foi definido o atributo
    "preco" */
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)// valor invalido -> undefined
console.log(produto)

produto.preco=null //sem preço
console.log(!!produto.preco) //vira uma booleana
console.log(produto)