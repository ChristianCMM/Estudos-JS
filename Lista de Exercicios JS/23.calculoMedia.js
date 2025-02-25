function calculoNotas(nota1,nota2,nota3){
    let notaMaior
    let notaMedia
    let notaMenor
    if (nota1>nota2&&nota1>nota3){
        notaMaior=nota1
        notaMedia=nota2
        notaMenor=nota3
    }else if(nota2>nota1&&nota2>nota3){
        notaMaior=nota2
        notaMedia=nota3
        notaMenor=nota1
    }else if(nota3>nota1&&nota3>nota2){
        notaMaior=nota3
        notaMedia=nota1
        notaMenor=nota2
        
    }
    let mediaPonderada = (notaMaior*4+notaMedia*3+notaMenor*3)/10
    if (mediaPonderada>=5){
        return "aprovado"
    }else if(mediaPonderada<5){
        return "reprovado"
    }
    
}
console.log(calculoNotas(6,5,5))