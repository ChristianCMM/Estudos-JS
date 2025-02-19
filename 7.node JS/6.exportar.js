console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3


exports = null

console.log(module.exports) /* retorna os valores normais e não o "null" 
pois, no fim, quem exporta é o "module.exports" */

exports = {
    nome: 'Teste'
}
console.log(module.exports) // aponta para os valores iniciais, mesmo definindo valor para "exports"

// caso queira usar um novo objeto para exportar, deve-se utilizar o "module.exports"
// ex:

module.exports = {publico: true}