let isAtivo = false
console.log(isAtivo)

isAtivo=true
console.log(isAtivo)

isAtivo=1
console.log(!isAtivo)//Negação
console.log(!!isAtivo)//"!!", nega a negação

console.log('os verdadeiros...')
console.log(!!3)//força uma conversão para verdadeiro ou falso
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo=true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('pra finalizar')
console.log(!!(''||null||0||' '))/*apresente "true" pois, ao menos um
    dos valores é true*/

    //para aplicar um valor padrão a uma variavel, segue abaixo:
let nome=''
console.log(nome||'Desconhecido')/*como o valor é VAZIO, apresenta a
    String "Desconhecido" */