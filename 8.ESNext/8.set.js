// Estrutura de conjunto
// não aceita repetição/ não indexada
const times = new Set()

times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))// não encontra
console.log(times.has('Vasco'))// case sensitive
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel','Lucas','Julia','Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)