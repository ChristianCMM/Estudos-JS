const listaDeAlunos = []
const listaDeMedias = []
// função construtora de alunos
const criarAluno = (nome,nota1,nota2,nota3)=>{
    return {
        nome,
        nota1,
        nota2,
        nota3
    }
}
// verificar se o aluno está ou nao a cima de 7 e insere a nota no array de notas e informa se passou ou não
function verificarNotas(media,aluno){
    if(media >=7){
        listaDeAlunos.push(`${aluno.nome} está com media ${media.toFixed(2)} aprovado!`)
        listaDeMedias.push(parseFloat(media.toFixed(2)))
    }else{
        listaDeAlunos.push(`${aluno.nome} está com media ${media.toFixed(2)} reprovado!`)
        listaDeMedias.push(parseFloat(media.toFixed(2)))
    }
}
function calcularNota(aluno){
    const media = (aluno.nota1+aluno.nota2+aluno.nota3)/3
    verificarNotas(media,aluno)    
}

// cria os alunos
const aluno1=criarAluno('joao',4,5,7)
const aluno2=criarAluno('maria',4,7,8)
const aluno3=criarAluno('maria',6,3,9)
const aluno4=criarAluno('tereza',9,7,10)
const aluno5=criarAluno('andré',1,2,3)

// função que calcula se o aluno está aprovado, individualmente
calcularNota(aluno1)
calcularNota(aluno2)
calcularNota(aluno3)
calcularNota(aluno4)
calcularNota(aluno5)

// percorre o array de notas gerais e soma tudo
const mediaValor = listaDeMedias.reduce((acumulador,atual)=>{
    return acumulador+atual
})

listaDeAlunos.push(`A media dos alunos é ${(mediaValor/listaDeMedias.length).toFixed(2)}`)

console.log(listaDeAlunos)