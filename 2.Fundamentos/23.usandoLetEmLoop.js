// problema historico do JS
const funcs = []

for (let i=0; i<10;i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()// deveria apresentar o valor "2", pois LET tem escopo de bloco
funcs[8]()// deveria apresentar o valoor "8", pois LET tem escopo de bloco