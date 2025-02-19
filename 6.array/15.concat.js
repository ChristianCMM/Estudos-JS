const filhas=['Ana','Maria']
const filhos=['Antonio','Joao']
const todos = filhas.concat(filhos,'fulano')
console.log(todos)

//outro exemplo
console.log([].concat([1,2],[3,4],5,[[6,7]])) // gera um novo array, não altera o atual