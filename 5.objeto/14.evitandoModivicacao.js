// Object.preventExtensions -> previne que receba mais atributos do objeto
const produto = Object.preventExtensions({
    nome:'Qualquer', preco:1.99,tag:'Promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))

delete produto.tag // vai surtir efeito
produto.nome='borracha' // vai surtir efeito
produto.descricao='Borracha Escolar branca' // nao vai surtir efeito
console.log(produto)

/*Object.seal -> "selar" o objeto, pode ser modificado, mas não 
    adicionar ou excluir parametros*/
const pessoa={nome:'Juliana',idade:35}
Object.seal(pessoa) // selado
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome='Silva'// não vai surtir efeito
delete pessoa.nome// não vai surtir efeito
pessoa.idade=29// vai surtir efeito
console.log(pessoa)

// Object.freeze = selado + valores constantes/writeble=false