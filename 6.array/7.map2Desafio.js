// Desafio:
//minha resolução
const carrinho=[
    '{"nome": "Borracha", "Preco":3.45}',
    '{"nome": "Caderno", "preco":13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// retornar um array com os preços

const paraObjeto = json => JSON.parse(json)
const deletando = json => delete json.nome


let novoArray = carrinho.map(paraObjeto)
novoArray.map(deletando)
console.log(novoArray)