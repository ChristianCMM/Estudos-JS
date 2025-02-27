// este é apenas um código para mostrar o motivo que o "promise" foi criado
// exemplo com promise
const http = require('http')
const getTurma = (letra)=>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject)=>{
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

// recurso ES8
// Objetivo de simplificar o uso de promises...
// Deve-se marcar a variavel com "async" para que o AWAIT funcione
let obterAlunos = async()=>{
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA,turmaB,turmaC)
}// retorna um objeto AsyncFuncion

obterAlunos()
    .then(alunos=>alunos.map(a=>a.nome))
    .then(nomes => console.log(nomes))