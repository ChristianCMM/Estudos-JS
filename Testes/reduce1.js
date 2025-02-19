const meuArray = [
    {nome:'João',nota: 7.5},
    {nome:'Maria',nota:5.4},
    {nome:'Roberto',nota: 9.0},
    {nome:'Claudia',nota: 3.2},
]
// tentei fazer o código de modo "Imperativo"

// utilizado no MAP
const mostrarNota=aluno=>aluno.nota 

// utilizado no REDUCE
const notasSomadas=(total,nota)=>total+nota 

//calcula a media 
const mediaTotal=(somaTotal,arrrayEscolhido)=>somaTotal/arrrayEscolhido.length //

// utilizando as funções criadas
const total=meuArray.map(mostrarNota).reduce(notasSomadas)

//centraliza em uma constante
const mediaFInal = mediaTotal(total,meuArray)

// mostra a media final com 2 casas depois da virgula
console.log(mediaFInal.toFixed(2))

