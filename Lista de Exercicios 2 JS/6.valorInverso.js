const inverso=valor=>{
    if(typeof valor== typeof true||typeof valor==typeof false){
        return valor=!valor
    }else if(typeof valor== typeof 1){
        return valor*= (-1)
    }else{
        return `Booleano ou número esperados, mas o parâmetro é do tipo '${typeof valor}'`
    }
}
console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(100))
console.log(inverso(-100))
console.log(inverso('Olá'))