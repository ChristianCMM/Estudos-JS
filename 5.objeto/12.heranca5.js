// todos possuem o atributo ".prototype"
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// declarando uma função ao "prototype" (não fazer, apenas exemplo)
String.prototype.reverse=function(){
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first=function(){
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c','d'].first())

String.prototype.toString=function(){
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())// irá chamar outra função dentro de "prototype"(Erro)
