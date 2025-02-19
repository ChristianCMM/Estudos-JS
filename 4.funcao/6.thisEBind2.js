function pessoa(){
    this.idade=0

    setInterval(function(){// chama uma função, depois de um intervalo
        this.idade++
        console.log(this.idade)
    }.bind(this),// aplica o bind a função que o "setInterval" chama
        1000)// intervalo em 'milisegundoss'
}
new pessoa

// um artificio que pode ser feito com "self", que será constante
function pessoa2(){
    this.idade=0

    const self=this
    setInterval(function(){// chama uma função, depois de um intervalo
        self.idade++
        console.log(self.idade)
    },1000)// intervalo em 'milisegundoss'
}
new pessoa2