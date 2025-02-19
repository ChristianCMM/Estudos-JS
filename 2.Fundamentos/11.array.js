const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0], valores[3])
console.log(valores[4])//undefined

valores[4] = 10
console.log(valores.length)/*função que apresenta a quantidade de
    valores do array*/
valores[10] = 10
console.log(valores)

valores.push({id:3}, false,null,'teste')/* array do javascript é 
    heterogeneo*/
console.log(valores)

console.log(valores.pop())//tirar valores do final do array
delete valores[0]// apaga o valor do final do array
console.log(valores)

console.log(typeof valores)