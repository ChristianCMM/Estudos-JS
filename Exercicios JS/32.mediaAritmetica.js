function mediaAritmetica(nota1,nota2,nota3){
    let notas=[]
    let media=0
    notas.push(nota1,nota2,nota3)
    media=(nota1+nota2+nota3)/notas.length
    return media
}
console.log(mediaAritmetica(7,7,7))