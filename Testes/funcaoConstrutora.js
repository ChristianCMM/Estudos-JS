function Carro(valor=0,ano=2000){
    this.getValor=valor
    this.getAno=()=>{
        if(ano<2024){
            return ano
        }
        else{
            return 'Escreva um ano válido!'
        }
    }  
}
const fiesta=new Carro(10000,2025)
console.log(fiesta.getAno())
console.log(fiesta.getValor)