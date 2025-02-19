Array.prototype.reduce2=function(callback, valorInicial){
    const indiceInicial = valorInicial?0:1
    let acumulador=this[0]
    for (let i=indiceInicial;i<this.length;i++){
        acumulador=callback(acumulador,this[i],i,this)
    }
    return acumulador
}

// aula do "REDUCE1.js"
const alunos=[
    {nome:'João', nota: 7.3, bolsista:false},
    {nome:'Maria', nota: 9.2, bolsista: true},
    {nome:'Pedro', nota: 9.8, bolsista: false},
    {nome:'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(aluno=>aluno.nota))
/* "reduce" gera um valor, onde o primeiro elemento (indice ZERO[0]) 
    serve para acumular os demais, no exemplo abaixo, ele acumula a soma*/

const resultado = alunos.map(aluno=>aluno.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador+atual
}, 10)// serve para declarar um valor inicial, no caso "10" ou um ARRAY

console.log(resultado)