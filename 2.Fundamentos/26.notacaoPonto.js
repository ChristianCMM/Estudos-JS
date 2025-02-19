//acessando uma função pela Notação PONTO
console.log(Math.ceil(6.1))// arredonda o numero para cima
console.log(Math.floor(6.1))// arredonda o numero para beixo

const obj1={}
obj1.nome='bola'
//obj1['nome']='bola2'
console.log(obj1.nome)

function Obj(nome){
    this.nome=nome//ficará publico com "this"
    this .exec=function(){
        console.log('Exec...')
    }
}
const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()// acessando uma função do objeto