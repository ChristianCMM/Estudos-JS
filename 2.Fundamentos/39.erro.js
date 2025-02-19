function tratarErroELancar(e){ //função chamada pelo "CATCH"
    //throw executa apresenta um comando (Ex: mensagem de erro )
    throw new Error('...')
    //throw 10
    //throw true 
    //throw 'mensagem'
    /*throw { 
        nome: erro.mensagem,
        msg: erro.message,
        date: new Date
    }*/
}

function imprimirNomeGritado(obj){
    //usar o "try" quando tiver chance de erro
    try { // irá tentar executar esta linha, caso não consiga, o "CATCH" será executado
        console.log(obj.name.toUpperCase()+"!!!")
    } catch(e){
        tratarErroELancar(e)// chama a função
    }finally{ // será executado, mesmo se apresentar problema
        console.log('final')
    }
    
}
const obj = {nome:'Roberto'} // erro proposital "nome" diferente de "name"(17)
imprimirNomeGritado(obj)