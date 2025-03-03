// função em JS é FIRST-CLASS Objetct (Citizens) 
//Higher- function

//criar em de forma literar
function fun1(){}

// armazenar em uma variável
const fun2 = function(){} //função anonima

//armazenar em um array
const array = [function(a,b){return a + b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar em um atributo de Objeto
const obj={}
obj.falar=function(){return "Opa"}
console.log(obj.falar())

//passar função como parametro
function run(fun){
    fun()
}
run(function(){console.log('Executando...')})

// uma função pode retornar/conter uma função
function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)