function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1=new MeuObjeto
const obj2=new MeuObjeto
console.log(obj1.__proto__===obj2.__proto__)// apontam ao mesmo prototipo

// aponta para o atribudo "prototype da função" e não para "Object.prototype"
console.log(MeuObjeto.prototype===obj1.__proto__)

MeuObjeto.prototype.nome='Anônimo'
MeuObjeto.prototype.falar=function(){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}
obj1.falar()

obj2.nome='Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__=MeuObjeto.prototype// mudando a referencia
obj3.nome='Obj3'
obj3.falar()

// resumindo, algumas verdades
console.log((new MeuObjeto).__proto__===MeuObjeto.prototype)
console.log(MeuObjeto.__proto__===Function.prototype)
console.log(Function.prototype.__proto__===Object.prototype)
console.log(Object.prototype.__proto__===null)
console.log(Object.prototype.__proto__!==undefined)