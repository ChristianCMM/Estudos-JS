// tratando erros nas promises
// função abaixo gera um numero entre 0 e 1, onde 1 é 100% de apresentar "erro"
// será gerado um numero que, caso seja menor que o valor inserido, apresentará "erro"
function funcionarOuNao(valor,chanceErro){
    return new Promise((resolve, reject)=>{
        if(Math.random()< chanceErro){
            reject('Ocorreu um erro!')
        }else{
            resolve(valor)
        }
    })
}

funcionarOuNao('testando...',0.5) // 50% de dar erro
    .then(valor=>`valor: ${valor}`)

    // tratando exceções dentro do ".then" (não será chamado o "catch", após isso) 
    .then(
        valor=>console.log(valor),
        err=>console.log(`Erro especifico: ${err}`)
    )

    //tratando o erro com "catch"
    .catch(err=>console.log(`Erro: ${err}`))// mais interessante colocar na ultima linha
    
    //pode ser colocado mais chamadas ".then", mas não haverá valor recebido
    .then(()=>console.log('fim!'))