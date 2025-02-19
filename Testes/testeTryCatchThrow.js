function numeroDobro(numeroInserido){
    try{
        if(numeroInserido<0){
            throw "numero muito baixo"/* "throw" é o "return" do "try", 
            onde o "throw" determina o valor de "erroNumero"*/
        }
        if(numeroInserido>10){
            throw "numero muito alto"
        }else{
            return numeroInserido*=2
        }
    }
    catch(erroNumero){ 
        return erroNumero
    }
    
}
console.log(numeroDobro(2))