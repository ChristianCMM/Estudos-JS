// sempre vai apresentar TRUE ou False
console.log('01)','1'==1) //compara valores
console.log('02)','1'===1) //compara os tipos
console.log('03)','3'!=3) //compara os valores
console.log('04)','3'!==3) //compara os tipos

console.log('5)', 3< 2)
console.log('6)', 3> 2)
console.log('7)', 3<= 2)
console.log('8)', 3>= 2)

const d1 = new Date(0)// valor 0 = 01/01/1970
const d2 = new Date(0)// valor 0 = 01/01/1970
console.log('09)', d1 ===d2) //compara referencia de memoria
console.log('10)', d1 ==d2) //compara referencia de memoria
console.log('11)', d1.getTime() === d2.getTime())//compara os tipos
console.log('11)', d1.getTime() == d2.getTime())//compara os valores

console.log('12)', undefined == null)
console.log('13)', undefined === null)