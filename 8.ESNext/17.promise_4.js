// como chamar varias promise e apenas depois chamar o ".then"
function gerarNumerosEntre(min,max, tempo){
    if(min>max){
        [min, max]=[max, min]
    }
    return new Promise(resolve=>{
        setTimeout(function (){
            const fator=max-min+1
            const aleatorio = parseInt(Math.random()*fator)+min
            resolve(aleatorio) 
        }, tempo)
    })
}
// simulando a chamada de varias primises
function gerarVariosNumeros(){
    return Promise.all([ // só apresenta o resultado quando todas as promises são concluidas
        gerarNumerosEntre(1,60,4000),
        gerarNumerosEntre(1,60,1000),
        gerarNumerosEntre(1,60,500),
        gerarNumerosEntre(1,60,3000),
        gerarNumerosEntre(1,60,100),
        gerarNumerosEntre(1,60,1500)
    ])
}
// acessando todas as promises por apenas 1 ".then"
gerarVariosNumeros()
    .then(numeros => console.log(numeros))