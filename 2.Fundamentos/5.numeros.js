const peso1=1.0
const peso2=Number("2.0")
console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2)) //verifica se o valor é numeral

const prova1=9.871
const prova2=6.871

const total = prova1*peso1 + prova2*peso2
const media = total / (peso1+peso2)

console.log(media.toFixed(2))/* "toFixed" função com que faz apresentar apenas 2 casas decimais */
console.log(media.toString())/* "toString" função com que transforma o valor em string */
console.log(media.toString(2))/* colocar "2" transforma o valor em binario */
console.log(typeof media)
console.log(typeof Number)
