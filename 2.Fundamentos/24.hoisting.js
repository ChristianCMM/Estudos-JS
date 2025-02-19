console.log('a=', a)
var a =2 /* variavel é jogada para cima (hoisting), onde não apresenta erro, 
    mas ainda não foi declarada */
console.log('a= ',a)

console.log('b= ', b)
let b=1// não ocorre o hoisting
console.log('b= ', b)