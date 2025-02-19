// usuários cadastrados
const usuarios = [ 
    usuario1={
        nome:'Christian',
        idade: 23
    },
    usuario2={
        nome:'Antonio',
        idade: 33
    },
    usuario3={
        nome:'Roberto',
        idade: 45
    }
]
/*função que solicita o cadastro, nome do cadastrado e a idade. então 
    insere no array de usuários */
function novoUsuario(novoCadastro='',novoNome='',novoIdade=0){
    novoCadastro= new Object()
    novoCadastro.nome = novoNome
    novoCadastro.idade = novoIdade
    usuarios.push(novoCadastro)
}
//cadastro de um novo usuário
novoUsuario('andreizin','André', 99)

//nota: colocar um comparador que verifica se os dados de 2 usuários são iguais

/*função que sorteia um numero de 0 até o valor de quantidade de usuários
    cadastrados */
function sorteio(min=0, max= usuarios.length){
    const valor = Math.random()*(max-min)+min
    return valor
}
//arredonda o valor sorteado para baixo e atribui a uma variavel
const numeroSorteado=Math.floor(sorteio())
//desestrutura o no objeto sorteado para apresentar o nome
const {nome, idade} = usuarios[numeroSorteado]

if (idade>18){
    console.log(`${nome}, você foi sorteado!`)
} else{
    console.log(`${nome}, você não pode ser sorteado pois é menor de idade, ${idade} anos`)
}