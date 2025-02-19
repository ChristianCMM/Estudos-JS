// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externar à função

// contexto léxico em ação!

const x = 'Global'

function fora(){
    const x= "Local"
    function dentro(){ // irá retornar "Local", pois foi declarada DENTRO da função local
        return x
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())