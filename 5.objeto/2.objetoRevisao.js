//coleção dinamica de pares chave/valor
const produto = new Object()
// formas de adicionar parametros ao objeto
produto.nome='cadeira'
produto['marca do produto']='Generica'
produto.preco=220

console.log(produto)

// formas de apagar parametros ao objeto
delete produto.preco
delete produto['marca do produto']/* usar quando a string foge 
    do padrão de declaração padrão (Ex: com espaços)*/
console.log(produto)

// possibilidade de objeto complexo
const carro = {
    modelo:'A4',
    valor:89000,
    proprietario:{
        nome:'Raul',
        idade:56,
        endereco:{
            logradouro:'Rua ABC',
            numero: 123
        }
    },
    condutores:[{// array de objetos dentro de um objeto
        nome:'junior',
        idade:19
    },{
        nome:'Ana',
        idade: 42
    }],
    calculadoraValorSeguro: function(){
        //...
    }
}
// adicionando parametros ao objeto
carro.proprietario.endereco.numero=1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calculadoraValorSeguro
console.log(carro)
console.log(carro.condutores)// mesmo não existindo o parametro, não gera erro

// console.log(carro.condutores.length)// gera erro, pois tenta acessar o parametro

