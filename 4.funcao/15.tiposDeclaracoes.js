console.log(soma(3,4)) // pode chamar a function declaration antes de serem declaradas
console.log(sub(3,4))// não pode pode chamar a function expression antes de serem declaradas
console.log(sub(3,4))// não pode pode chamar a named function expression antes de serem declaradas

//function declaration
function soma(x,y){
    return x + y
}

// function expression
const sub = function (x,y){
    return x-y
}
 
// named function expression(pouco usada)
const mult = function mult(x,y){
    return x*y
}