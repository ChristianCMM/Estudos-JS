function Cachorro(raca){
    return {
        getRaca:raca
    }
}
const novoCachorro=new Cachorro('pincher')
console.log(novoCachorro.getRaca)