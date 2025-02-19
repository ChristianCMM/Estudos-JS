function calculoIMC(){
    let imc=this.peso/(Math.pow(this.altura,2))
    return imc.toFixed(2)
}

const pessoa={
    peso:68,
    altura:1.73,
    imc:calculoIMC
}

console.log(pessoa.imc())