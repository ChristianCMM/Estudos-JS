function tipoTriangulo(lado1,lado2,lado3){
    if(lado1==lado2&&lado2==lado3){
        console.log('Triangulo Equilátero')
    }else if(lado1!=lado2&&lado1!=lado3&&lado3==lado2){
        console.log('Triangulo Isósceles')
    }else if(lado2!=lado1&&lado2!=lado3&&lado1==lado3){
        console.log('Triangulo Isósceles')
    }else if(lado3!=lado1&&lado3!=lado2&&lado1==lado2){
        console.log('Triangulo Isósceles')   
    }else{
        console.log('Triangulo Escaleno')
    }
}
tipoTriangulo(3,1,2)