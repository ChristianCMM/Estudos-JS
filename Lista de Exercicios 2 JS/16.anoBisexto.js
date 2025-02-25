const checarAnoBisexto = ano =>{
    if(ano%4==0 && ano%100!=0){
        return true
    }else if(ano%400==0){
        return true
    }else{
        return false
    }
}
console.log(checarAnoBisexto(2020))
console.log(checarAnoBisexto(2100))
console.log(checarAnoBisexto(1900))
console.log(checarAnoBisexto(2000))