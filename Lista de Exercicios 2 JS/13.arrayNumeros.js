const validaNumero=valor=>typeof valor==typeof 1

const filtrarNumeros=meuArray=>{
    let novoArray=[]
    meuArray.map(function(valor){
        if(typeof valor==typeof 1){
            novoArray.push(valor)
        }
    })
    return novoArray
}
console.log(filtrarNumeros(['javascript',1,'3','web',20]))
console.log(filtrarNumeros(['a','c']))