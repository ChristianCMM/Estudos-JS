const notas = [6.7,7.4,9.8,8.1,7.7]
/*FOR IN é um metodo de mapeamento de Array ou Objeto que entrega o indice 
    e não o valor solicitado(Ex: notas[i]=0 -> indice ZERO) */
for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa){
    console.log(atributo, pessoa[atributo])
}