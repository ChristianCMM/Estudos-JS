function Carro(velocidadeMaxima = 200, delta = 5){ //"delta" = velocidade de aceleração
    // atributo privado
    let velocidadeAtual = 0 //

    //metodo publico
    this.acelerar = function(){ // função que "acelera" o carro até o maximo
        if (velocidadeAtual+delta<= velocidadeMaxima){
            velocidadeAtual+=delta //adiciona velocidade
        } else {
            // caso a velocidade seja maior que o maximo, será capado 
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}
const uno = new Carro // declara um objeto "carro", com nome "uno"
uno.acelerar() // chama a função de acelerar
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20) // declara velocidade maxima e aceleração
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) // função
console.log(typeof ferrari) //objeto