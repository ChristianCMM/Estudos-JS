const pessoa = {
    nome:'Rebeca',
    idade:2,
    peso: 13
}

console.log(Object.keys(pessoa)) // pega todas as chaves do objeto
console.log(Object.values(pessoa))// pega todos os valores do objeto
console.log(Object.entries(pessoa))// pega todos os subarrays do objeto, transformando em um array

Object.entries(pessoa).forEach(e=>{
    console.log(`${e[0]}:${e[1]}}`)
})

Object.entries(pessoa).forEach(([chave,valor])=>{ // destructuring
    console.log(`${chave}:${valor}`)
})

Object.defineProperty(pessoa,'dataNascimento',{
    enumerable:true,
    writable:false,
    value:'01/01/2019'
}) 

pessoa.dataNascimento='01/01/2017'
console.log(pessoa.dataNascimento) // não pode ser sobrescrita (linha: 21)

console.log(Object.keys(pessoa)) // "dataNascimento" é listada (linha: 20)

// Object.assign (ECMAScript 2015)
const destino={a:1}
const objeto1={b:2}
const objeto2={c:3,a:4} // "a" será sobrescrito, pois é igual da linha: 32
const obj= Object.assign(destino,objeto1,objeto2) /* concatena os 
    objetos (OBS: o primeiro elemento "destino", recebe os demais 
    "objeto1" e "objeto2")*/
Object.freeze(obj)
obj.c=1234
console.log(obj)