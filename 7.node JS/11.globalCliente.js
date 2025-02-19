require('./11.global') // importando sem atribuir a uma variavel

console.log(MinhaAPP.saudacao())
console.log(MinhaAPP.nome)
//-------------------
MinhaAPP.nome = 'Eita!' // não é alterado, pois foi usado o Object.freeze
console.log(MinhaAPP.nome) 