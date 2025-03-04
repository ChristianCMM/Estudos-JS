function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(()=>resolve(), tempo)
    })
}

/*esperarPor(2000)
    .then(()=>console.log('Executando promise 1...'))

    .then(esperarPor) // pega o valor padrão (2000)
    .then(()=>console.log('Executando promise 2...'))

    .then(esperarPor) // pega o valor padrão (2000)
    .then(()=>console.log('Executando promise 3...'))
*/
function retornarValor(){
    return new Promise(resolve=>{
        setTimeout(() => resolve(10),5000);
    })
}

// a função Asincrona parece sincrona, ela espera a execução para fazer a proxima
// caso tenha uma promise, pode usar o "await"
async function executar(){ // async retorna uma Promise
    let valor = await retornarValor()

    await esperarPor(1500) // apenas vai para a proxima linha após concluir essa promise
    console.log(`Async/Await ${valor}`)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor+1}`)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor+2}`)

    return valor + 3
}
// para chamar o "return" deve-se usar o ".then"
executar()
    .then(console.log)