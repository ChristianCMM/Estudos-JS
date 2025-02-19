// mais formas de chamar uma função:
function getPreco(imposto=0,moeda='R$'){
    //exemplo: (1-0.1) fica 0.9 que é 90%
    return `${moeda} ${this.preco*(1-this.desc)*(1+imposto)}`
}

const produto ={
    nome:'Notebook',
    preco: 4589,
    desc:0.15,
    getPreco//chama a função, com os parametros do objeto
}

console.log(getPreco())// "NaN", pois não há parametros
console.log(produto.getPreco())

console.log('----------------------------')
//call e apply
// a forma de passar os parametros é diferente do a cima
const carro={preco:49990, desc:0.20}

console.log(getPreco.call(carro))//pode estar vazio ou não
console.log(getPreco.apply(carro))

console.log('----------------------------')
//outros exemplos:
console.log(getPreco.call(carro,0.17,'$')) // colocando os parametros
console.log(getPreco.apply(carro,[0.17,'$']))// deve-se colocar o contexto ("carro") e depois os parametros em forma de Array