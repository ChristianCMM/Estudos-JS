function centavos(valor1){
    valor1=valor1.toFixed(2)
    valor1=valor1.replace('.',',')
    console.log('R$',valor1)
}
centavos(0.30000000000000004)