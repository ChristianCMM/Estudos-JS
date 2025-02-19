let comparaComThis = function(param){
    console.log(this===param) // Escopo global
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) // aplica o bind no Objeto "obj"
comparaComThis(global)
comparaComThis(obj)
console.log("--------------------------------------------")
// mesmo teste com Arrow Function
let comparaComThisArrow = param => console.log(this===param) // "This" aponta para o modulo onde está presente

comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(global) // arrow Function não é alterado pelo BIND