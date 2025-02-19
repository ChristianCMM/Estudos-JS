/*template string interpola as strings, modificando as strings durante 
    a execução */

const nome ='Rebeca'
const concatenacao = 'Olá' + nome + '!'

const template = `
Olá
${nome}!`
console.log(template)/*template string permite quebra de linha e 
    aprenseta no texo*/

// expressoes
console.log(`1+1=${1+1}`)// é apenas somado o que está dentro do "${}"

//pode chamar funções
const up = texto =>texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`)

//teste
const segundoNome = "Chris"
const apresentacao = "Bom Dia"
console.log(`olá ${segundoNome}, ${apresentacao}!`)