// Array é um objeto
// Array é heretogenea, mas a boa pratica diz para utilizar de modo Homogenea
console.log(typeof Array,typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])// não existe = undefined

// adicionando elementos no array
aprovados[3]= 'Paulo' // não usual
aprovados.push('Abia') // "push" adiciona elementos no final do array
console.log(aprovados.length)

aprovados[9]='Rafael'
console.log(aprovados.length) // os valores vao existisr, mas ficarão como "undefined"
console.log(aprovados[8]===undefined)
console.log(aprovados[8]===null)

console.log(aprovados)
aprovados.sort() // organiza em ordem alfabetica, alterando o array original
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)
//-------------------------------------------------////
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,1)//"slice" retira os indices do array, a partir do primeiro parametro e o segundo parametro a quantidade de indices a partir dele
console.log(aprovados)