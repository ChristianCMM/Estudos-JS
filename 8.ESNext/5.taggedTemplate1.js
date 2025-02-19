// tagged template - processa o template dentro de uma função
function tag(partes,...valores){
    console.log(partes)
    console.log(valores)
    return 'outra String'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag`${aluno} está ${situacao}.`)
console.log(`${aluno} está ${situacao}.`)