// simulando uma callback dentro de outra (callbacks aninhadas) "callback hell"
/*setTimeout(function(){
    console.log('Executando Callback...')

    setTimeout(function() {
        console.log('Executando Callback...')

        setTimeout(function() {
            console.log('Executando Callback...')
        },2000)
    },2000)
},2000)*/

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')
            resolve('Vishhhh')
        }, tempo)
    })
}

const promessa = esperarPor(3000)
console.log(promessa)// chamando a Promise

esperarPor(5000)
    .then(texto =>console.log(texto))

// simulando o código de "setTimeOut" da linha 2 até 12
esperarPor()// espera 2 segundos
    .then(() => esperarPor())//espera mais 2 segundos
    .then(esperarPor)//espera mais 2 segundos