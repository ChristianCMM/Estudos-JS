// ES8: Object.values/Object.entries
const obj = {a:1,b:2,c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(Object.keys(obj))

// melhorias na notação Literal
const nome = 'Carla'
const pessoa = {
    nome:nome,
    nome,//igual ao de cima
    ola(){
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola(), pessoa)

// class 
class Animal {}
class cachorro extends Animal {
    falar(){
        return 'Au au!'
    }
}
console.log(new cachorro().falar())