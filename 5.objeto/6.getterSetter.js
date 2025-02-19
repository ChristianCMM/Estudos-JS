const sequencia={
    _valor:1, // '_' é uma convenção (declarando para outras pessoas que esta é uma variavel privada)
    get valor(){return this._valor++},
    set outroValor(valor){ // "valor" sempre deverá ser maior que "_valor"
        if(valor>this._valor){
            this._valor=valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) // chamando o metodo "get"
sequencia.outroValor=1000 // definindo o 'valor'
console.log(sequencia.valor, sequencia.valor)
sequencia.outroValor=900// não funciona, pois é menor que 1000
console.log(sequencia.valor, sequencia.valor)