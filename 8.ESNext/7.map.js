const tecnologias = new Map()
tecnologias.set('react',{framework: false})
tecnologias.set('angular',{framework: true})

console.log(tecnologias.react)// errado
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function(){},'Função'],
    [{},'Objeto'],
    [123,'Numero']
])

chavesVariadas.forEach((valor,chave)=>{
    console.log(chave,valor)
})

console.log(chavesVariadas.has(123))// verifica se há esse parametro dentro do array
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)// verifica quantos elementos há no "MAP"

chavesVariadas.set(123,'a')
chavesVariadas.set(123,'b')//  não pode ter mais de um elemento com mesmo valor no map
console.log(chavesVariadas)