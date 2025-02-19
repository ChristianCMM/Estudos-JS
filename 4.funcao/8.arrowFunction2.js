function pessoa(){
    this.idade = 0 

    setInterval(()=>{
        this.idade++ // valor lexico, não varia na função arrow
        console.log(this.idade)
    },1000)
}
new pessoa