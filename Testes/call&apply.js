function maiorIdade(getIdade){
    if(getIdade<18){
        return `Você é menor de idade: ${getIdade}`
    }else if(typeof getIdade!='number'){ // verifica se a idade é numero ou não
        return 'Escreva um valor valido'
    }else{
        return `você é maior de idade: ${getIdade}`
    }
}

function primeiraLetra(nome=''){
    return nome.charAt(0).toUpperCase()
}

const novaPessoa={
    nome:'',
    idade:0
}
// CALL
console.log(maiorIdade.call(novaPessoa,23))
console.log(primeiraLetra.call(novaPessoa,'belle'))
//APPLY
console.log(maiorIdade.apply(novaPessoa,[19]))
console.log(primeiraLetra.apply(novaPessoa,['christian']))