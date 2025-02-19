const Carro={
    rodas:4,
    portas:2,
    tipoDeCombustivel:'Gasolina',
    velMax:200,
    velAtual:0,
    acelerarMais:function(delta){
        if(delta+velAtual<=velMax){
            velAtual=delta
        }else{
            velAtual=velMax
        }
    }
}

const uno=Object.create(Carro)
uno.cor="vermelho"
uno.motor='V8'

console.log(Object.values(uno)[0])