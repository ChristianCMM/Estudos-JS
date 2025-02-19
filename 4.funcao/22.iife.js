// IIFE -> Immediately Ivoked Function Expression(Função Imediatamente Auto Invocada )
// este tipo de função foge do escopo global, evitando a modificação de variaveis
// Sintaxe: 
(function exemplo(){
    var nome = "a" // disponivel apenas dentro da função
    console.log('será executado na hora')
    console.log('foge do escopo mais abrangente!')
})()