// este é apenas um código para mostrar o motivo que o "promise" foi criado
// exemplo sem promise
const http = require('http')
const getTurma = (letra, callback)=>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res=>{
        let resultado = ''
        res.on('data', dados=>{
            resultado+=dados
        })
        res.on('end',()=>{
            callback(JSON.parse(resultado))
        })
    })
}
let nomes = []
// callback hell
getTurma('A', alunos=>{
    nomes=nomes.concat(alunos.map(a=>`A: ${a.nome}`))
    getTurma('B', alunos=>{
        nomes=nomes.concat(alunos.map(a=>`C: ${a.nome}`))
        getTurma('C', alunos=>{
            nomes=nomes.concat(alunos.map(a=>`C: ${a.nome}`))
            console.log(nomes)
        })
        console.log(nomes)
    })
    console.log(nomes)
})
