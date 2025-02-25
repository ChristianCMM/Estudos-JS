const estaEntre=(numero,minimo,maximo,inclusivo=false)=>{
    if(inclusivo){
        if(numero>=minimo && numero<=maximo){
            return true
        }else if(numero<minimo || numero>maximo){
            return false
        }
    }else if(inclusivo==false){
        if(numero>minimo+1 && numero<maximo-1){
            return true
        }else if(numero<minimo+1 || numero>maximo-1 || numero == minimo || numero == maximo){
            return false
        }
    }
}
console.log(estaEntre(50,10,100))
console.log(estaEntre(16,100,160))
console.log(estaEntre(3,3,150))
console.log(estaEntre(3,3,150,true))