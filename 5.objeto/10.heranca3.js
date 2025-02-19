const pai={nome:"Pedro", corCabelo:'Marrom'}

const filha1=Object.create(pai)
filha1.nome='Ana'
console.log(filha1.nome,'',filha1.corCabelo)

// definindo mais parametros ao novo objeto
const filha2=Object.create(pai,{
    nome:{value:'Bia', writable: false, enumerable: true}
}) 

console.log(filha2.nome)
filha2.nome='Carla'// nao vai ser alterado (linha: 9)
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

/* percorrendo um objeto com "for in" para ver se a propriedade é 
    pertencente ao objeto ou é herdado de outro*/
for(let key in filha2){
    filha2.hasOwnProperty(key)? // if else
    console.log(`tem a propriedade: ${key}`):console.log(`Recebeu a propriedade ${key}`)
}