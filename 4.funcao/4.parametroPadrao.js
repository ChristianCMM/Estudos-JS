// estrategia 1 para gerar um valor padrão 
function soma1(a,b,c){
    a = a||1
    b = b||1
    c = c||1
    return a+b+c
}
console.log(soma1(), soma1(3), soma1(1,2,3))
console.log(soma1(0,0,0))// ZERO retorna falso, então vira o valor padrão "1"

// estrategia 2,3 e 4 para gerar valor padrão
function soma2(a,b,c){
    a = a !== undefined ? a : 1 /* se o valor for igual a "undefined"
    "a" irá pegar o valor padrão "1"*/ 
    b = 1 in arguments ? b : 1 /* caso o segundo argumento não existir
    pegue o valor padrão "1"  */
    
    // mais seguro entre os 3
    c = isNaN(c) ? 1: c /* se o valor c seja "NaN" pegue o valor padrão "1" */
    return a+b+c
}
console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

//valor padrão do ES2015
function soma3(a=1,b=1,c=1){ // funciona apenas para parametros de FUNÇÂO
    return a+b+c
}
console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))