// este é apenas um código para mostrar o motivo que o "promise" foi criado
// exemplo com promise
const http = require('http')
const getTurma = (letra)=>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, resject)=>{
        http.get(url, res=>{
            let resultado = ''
            res.on('data', dados=>{
                resultado+=dados
            })
            res.on('end',()=>{
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}
/*let nomes = []
// callback hell
getTurma('A').then( alunos=>{
    nomes=nomes.concat(alunos.map(a=>`A: ${a.nome}`))
    getTurma('B').then( alunos=>{
        nomes=nomes.concat(alunos.map(a=>`C: ${a.nome}`))
        getTurma('C').then( alunos=>{
            nomes=nomes.concat(alunos.map(a=>`C: ${a.nome}`))
            console.log(nomes)
        })
        console.log(nomes)
    })
    console.log(nomes)
})*/
//  "Promise.all" espera todas as promises serem resolvidas ou rejeitadas para iniciar
Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos =>alunos.map(aluno=>aluno.nome))
    .then(x=>console.log(x))
    .catch(e=>console.log(e.message))

// simulando um erro
getTurma('D').catch(e=>console.log(e.message))