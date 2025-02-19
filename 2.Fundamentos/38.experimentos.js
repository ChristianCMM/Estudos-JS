//conhecendo o RUNTIME

/* "this" é igual ao escopo onde ele se encontra.
    caso seja chamado no escopo blobal "this" === "global"
    caso seja chamado em um objeto "this" === *nome do objeto* */
let a = 3
console.log('A)',this.a)
console.log('A.2)',global.a)

global.b=123
console.log('B)',global.b)

this.c=456
console.log('C)',this.c)

console.log(module.exports.c)// exporta o C pra foda do escopo
console.log(module.exports===this)

this.d = false
this.e = "teste"

console.log(module.exports)// exporta todos os "this" para o escopo externo em um objeto
// module.exports={e: 456,f: false,g: 'teste' } // "this" == "exports"

//criando uma variavel maluca: sem VAR e LET
abc = 3 //não fazer
console.log(global.abc)
