// objetivo: conseguir extrair apenas as notas dos alunos
const escola=[{
    nome:'Turma M1',
    alunos:[{
        nome: 'Gustavo',
        nota:8.1
    },{
        nome:'Ana',
        nota:9.3
    }]
},{
    nome:'Turma M2',
    alunos:[{
        nome:'Rebeca',
        nota:8.9
    },{
        nome:'Roberto',
        nota:7.3
    }]
}]

const getNotaDoAluno=aluno=>aluno.nota// coleta as notas dos alunos
const getNotasDaTurma=turma=>turma.alunos.map(getNotaDoAluno)// coleta as nota das turmas

const notas1=escola.map(getNotasDaTurma)// coleta as notas da escola
console.log(notas1)

// "flatmap" serve para concatenar arrays para gerar apenas 1 array com todas os valores


const notas2=escola.flatMap(getNotasDaTurma)
console.log(notas2)