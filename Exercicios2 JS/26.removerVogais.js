const removerVogais = minhaString=>{
    let novaString=''
    for(let l of minhaString){
        if(l!=='a'&&l!=='e'&&l!=='i'&&l!=='o'&&l!=='u'){
            novaString+=l
        }
    }
    return novaString
}

console.log(removerVogais('cod3r'))
console.log(removerVogais('fundamentos'))