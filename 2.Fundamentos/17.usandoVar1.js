// em javascript, VAR tem apenas 2 escopos possiveis: Global e de função
{
    { 
        { 
            { 
                var sera = 'será???' 
                console.log(sera)
            } 
        } 
    } 
}
console.log(sera)

function teste(){
    var local = 123
    console.log(local) /*dentro do escopo, a variavel VAR da 
    função =  visivel*/
}
teste()
/*console.log(local) => fora do escopo, a variavel VAR da 
função =  invisivel*/