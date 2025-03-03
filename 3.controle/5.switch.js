const imprimirResultado = function (nota){
    switch(Math.floor(nota)){ // SWTICH retorna valores e não BOOLEANA
        case 10: // caso não tenha nada, irá executar esse CASE e o abaixo
        case 9:
            console.log('Quadro de honra')
            break// é necessário o break para que o código execute apenas o case e depois saia
        case 8: case 7:
            console.log("Aprovado")
            break
        case 6: case 5: case 4:
            console.log("Recuperação")
            break
        case 3: case 2: case 1: case 0: 
            console.log("Reprovado")
            break 
        default: // valor padrão, caso não entre em nenhum case e sai do SWTICH
            console.log("nota invalida")
    }
}
imprimirResultado(7)
imprimirResultado(8.9)
imprimirResultado(6.5)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)