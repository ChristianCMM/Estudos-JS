//modos de declaração da função arrow
let dobro = function(a){
    return a*2 // caso o bloco seja declarado, RETURN é obrigatorio
}

dobro = (a) => {
    return a*2
}
// apenas se houver uma função com 1 parametro, não precisa de parenteses
dobro = a => a*2 //return implicito
console.log(dobro(Math.PI))


let ola = function (){
    return 'olá'
}
ola = () => 'Olá' // não possui param (forma padrão)
ola = _ => 'Olá' // possui um param
console.log(ola())