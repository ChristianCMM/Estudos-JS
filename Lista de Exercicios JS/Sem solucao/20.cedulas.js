function quantidadeCedulas(valor){
    let notas100=valor/100
    let valorFaltante=valor-(notas100*100)
    valorFaltante=valorFaltante/50
}
quantidadeCedulas(375)