// LET tem escopos: global, de função e de bloco
var numero= 1
{
    let numero= 2 
    console.log('dentro =', numero)/* vai buscar a variavel no menor 
    escopo */
}
console.log('fora = ', numero)