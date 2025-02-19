// transformando WHILE em FOR
let contador = 1 
while(contador <=10){//irá realizar o código até a sentença seja falso
    console.log(`contador = ${contador}`)
    contador++
}

for(let i=1; i<=10; i++){
    console.log(`i = ${i}`)
}
// acessando ARRAYs com estrutura de repetição 
const notas = [6.7,7.4,9.8,8.1,7.7]
for (let i=0; i<notas.length;i++){
    console.log(`nota = ${notas[i]}`)
}