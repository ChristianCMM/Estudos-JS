const escola = "Cod3r"
console.log(escola.charAt(4))
console.log(escola.charAt(5))/* não apresenta erro 
    mesmo não encontrando o indice*/

console.log(escola.charCodeAt(3))// valor da tabela "unicode"
console.log(escola.indexOf("o"))/* verifica em qual o index está o 
    caractere selecionado */

console.log(escola.substring(1))/*objeto que faz reproduzir a partir
    do indice selecionado */
console.log(escola.substring(0,3))/*objeto que faz reproduzir a partir
    do indice selecionado, até o outro indice sem adicionar o segundo indice 
    (inicial e final) */

console.log('Escola '.concat(escola)+"!")//concatena strings

//regex
console.log(escola.replace(3, 'e'))/* reposicona o caractere do index
    selecionado e substitui pelo caractere ao lado */
console.log(escola.replace(/\d/, 'e'))/* substitui todos os numeros
    pela letra selecionada */
console.log(escola.replace(/\w/g, 'e'))/* substitui todos os caracteres
    pela letra selecionada */ /*g = flag global*/

console.log('Ana,Maria,Pedro'.split(','))/* cria uma array, separada
    por virgula*/