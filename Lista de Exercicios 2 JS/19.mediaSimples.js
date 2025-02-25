const calcularMedia=(valores)=>{
    let contador=0
    let total
    valores.forEach(n => {
        contador++
    });
    total=valores.reduce((soma,atual)=>soma+atual)
    return (total/contador).toFixed(0)
}
console.log(calcularMedia([0,10]))
console.log(calcularMedia([1,2,3,4,5]))