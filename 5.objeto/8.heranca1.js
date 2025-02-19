// prototype está apenas dentro de Objetos

const ferrari={
    modelo:'F40',
    velMax:324
}

const volvo={
    modelo:'V40',
    velMax:200
}

console.log(ferrari.prototype)// "undefined", pois "ferrari" é um objeto e não função

console.log(ferrari.__proto__) // "__proto__" é um atributo para acessar o "prototipo" desse objeto (Objeto Pai)

console.log(ferrari.__proto__===Object.prototype)
console.log(volvo.__proto__===Object.prototype)

console.log(volvo.__proto__===ferrari.__proto__)// todos os prototipos apontam para o mesmo "prototipo"(conceito)

console.log(Object.prototype.__proto__===null)// não há nada a cima do "prototipo" na hierarquia
//------------------------------------------------------------------------------
function MeuObjeto(){}
console.log(typeof Object,typeof MeuObjeto)
console.log(Object.prototype,MeuObjeto.prototype)