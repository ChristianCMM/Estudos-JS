const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
//dentro do 'ForEach' tem um laço "for"

/*toda a vez que o foreach interagir com o Array, vai executar a função */
aprovados.forEach(function(nome,indice, array){ // -> 'array' e 'indice' não são necessários 
    console.log(`${indice+1}) ${nome}`)
})

// aprovados, sem o indice:
aprovados.forEach(nome=>console.log(nome))

// passando funções para o "forEach"
const exebirAprovados=aprovado=>console.log(aprovado)
aprovados.forEach(exebirAprovados)