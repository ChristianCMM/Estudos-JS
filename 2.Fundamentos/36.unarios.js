let num1 = 1 
let num2 = 2

num1++// pós fixado (tem menor precedencia)
console.log(num1)

--num1//pré fixado (tem maior precedencia)
console.log(num1)

console.log(++num1===num2--)/*o valor é decrementado depois da comparação */
console.log(--num1===--num2)/*o valor é decrementado antes da comparação */
