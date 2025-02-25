function numeroFatorial(numero){
    for(let i=numero;i>1;i--){
        numero*=(i-1)
        console.log(`${i-1}: ${numero}`)
    }
}
numeroFatorial(7)