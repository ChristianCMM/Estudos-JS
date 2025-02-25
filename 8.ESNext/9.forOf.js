// pode ser feito em cima de palavras(Strings), mostra as letras
for(let letra of "Cod3r"){
    console.log(letra)
}

const assuntosEcma = ['Map','Set','Promisse']

// mostra os indices (in)
for(let i in assuntosEcma){
    console.log(i)
}
//mostra os valores (of)

for(let assunto of assuntosEcma){
    console.log(assunto)
}
// pode ser feito em um Map()
const assuntosMap = new Map([
    ['Map',{abordado:true}],
    ['Set',{abordado:true}],
    ['Promisse',{abordado:false}],
])

for(let assunto of assuntosMap){// mostra todos os arrays
    console.log(assunto) 
}
for(let chave of assuntosMap.keys()){// mostra as chaves
    console.log(chave)
}
for(let valor of assuntosMap.values()){// mostra os valores
    console.log(valor)
}
for(let [chave,valor] of assuntosMap.entries()){ //feito um destructuring, recebe a chave e valor
    console.log(chave,valor)
}
// pode ser feito em um Set()
const s = new Set(['a','b','c'])
for(let letra of s){
    console.log(letra)
}