function mediaFinal(nota){
    if (nota<0 || nota>100){
        console.log("coloque valores validos")
    }else if(nota<=36){
        console.log('Reprovado')
    }else if(100-nota==3||100-nota==2||100-nota==1){
        console.log('Sua nota é:',nota=100)
    }else if(95-nota==3||95-nota==2||95-nota==1){
        console.log('Sua nota é:',nota=95)
    }else if(90-nota==3||90-nota==2||90-nota==1){
        console.log('Sua nota é:',nota=90)
    }else if(85-nota==3||85-nota==2||85-nota==1){
        console.log('Sua nota é:',nota=85)
    }else if(80-nota==3||80-nota==2||80-nota==1){
        console.log('Sua nota é:',nota=80)
    }else if(75-nota==3||75-nota==2||75-nota==1){
        console.log('Sua nota é:',nota=75)
    }else if(70-nota==3||70-nota==2||70-nota==1){
        console.log('Sua nota é:',nota=70)
    }else if(65-nota==3||65-nota==2||65-nota==1){
        console.log('Sua nota é:',nota=65)
    }else if(60-nota==3||60-nota==2||60-nota==1){
        console.log('Sua nota é:',nota=60)
    }else if(55-nota==3||55-nota==2||55-nota==1){
        console.log('Sua nota é:',nota=55)
    }else if(50-nota==3||50-nota==2||50-nota==1){
        console.log('Sua nota é:',nota=50)
    }else if(45-nota==3||45-nota==2||45-nota==1){
        console.log('Sua nota é:',nota=45)
    }else if(40-nota==3||40-nota==2||40-nota==1){
        console.log('Sua nota é:',nota=40)
    }else{
        console.log('Sua nota é:',nota)
    }
}
mediaFinal(37)