// cadeira de protótipos (prototype chain)
//Object.prototype.attr0='0' // não manipular os atributos 

const avo = {attr1: "A"}
const pai = {__proto__:avo, // busca os atributos do AVO
    attr2:'B'}
const filho={__proto__:pai,attr3:'C'}

//sobrescrevendo atributos
filho.attr3='3'

//console.log(filho.attr0)// não há este atributo em "prototype", apenas se a linha 2 seja alterada
console.log(filho.attr0,filho.attr1,filho.attr2,filho.attr3)

// exemplo complexo
const carro={
    velAtual:0,
    velMax:200,
    acelerarMais(delta){
        if(this.velAtual+delta<=this.velMax){
            this.velAtual+=delta
        }else{
            this.velAtual=this.velMax
        }
    },
    status(){
        return `${this.velAtual} KM/h de ${this.velMax} KM/h`
    }
}

const ferrari={
    modelo:'F40',
    velMax:324 // shadowing de atributos (linha: 18)
}

const volvo={
    modelo:'V40',
    status(){ // shadowing de função com "super"
        return `Modelo ${this.modelo}: ${super.status()}`
    }
}
//referenciando prototipos
Object.setPrototypeOf(ferrari, carro) //objeto, prototipo do objeto
Object.setPrototypeOf(volvo, carro) //objeto, prototipo do objeto

console.log(ferrari)// não apresenta os atributos dos prototipos
console.log(volvo)// não apresenta os atributos dos prototipos

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())