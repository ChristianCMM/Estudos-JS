function formulaDeBhaskara(a,b,c){
    let delta=Math.sqrt(Math.pow(b,2)-4*a*c)
    let x1 = (-b+delta)/2*a
    let x2 = (-b-delta)/2*a
    if(delta<0){
        return "Delta é negativo"
    }
    return console.log(x1,x2)
}
formulaDeBhaskara(3,-5,12)

