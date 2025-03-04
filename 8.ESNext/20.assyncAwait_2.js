// Gerando numeros para "Mega Sena" 
// tratando erro de uma função assincrona
function gerarNumerosEntre(min,max,numerosProibidos){
    if(min>max){
        [min, max]=[max, min]
    }
    return new Promise((resolve,reject)=>{
        const fator=max-min+1
        const aleatorio = parseInt(Math.random()*fator)+min
        if(numerosProibidos.includes(aleatorio)){ // verifica se o numero ja foi sorteado
            reject('Numero repetido')
        }else{
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(quantidadeDeNumeros, tentativas = 1){
    try{
        const numerosSorteados = []
        // "Fill" gera um array com a quantidade de numeros desejadas como "undefined", para serem definidos
        for (let _ of Array(quantidadeDeNumeros).fill()){ 
            numerosSorteados.push(await gerarNumerosEntre(1,60,numerosSorteados))
        }
        return numerosSorteados
    }catch(e){// neste caso, tento chamar a propria funçao até 5 vezes para gerar os numero, até em um maximo de 5
        if(tentativas>5){
            throw "Não deu certo!"
        }
        gerarMegaSena(quantidadeDeNumeros,tentativas + 1)
    }    
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)