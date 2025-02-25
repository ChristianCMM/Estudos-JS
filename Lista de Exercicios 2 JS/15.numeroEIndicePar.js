const receberSomenteOsPares=meuArray=>{
    let novoArray=[]
    meuArray.map(function(valor){
            if(meuArray.indexOf(valor)%2==0 && valor%2 == 0){
            novoArray.push(valor)
        }
    })
    return novoArray
}
console.log(receberSomenteOsPares([1,2,3,4,6]))
console.log(receberSomenteOsPares([10,70,22,43]))

// opção  2
const receberSomenteOsPares2=meuArray=>{
    return meuArray.filter(function(valor){
        let novoArray=[]
        if(valor%2==0 && meuArray.indexOf(valor)%2==0){
            novoArray.push(valor)
            return novoArray
        }
        
    })    
}

console.log(receberSomenteOsPares2([1,2,3,4,6]))
console.log(receberSomenteOsPares2([10,70,22,43]))