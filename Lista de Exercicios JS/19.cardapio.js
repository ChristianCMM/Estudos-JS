function pedidoSelecionado(codigo,quantidade){
    switch(codigo){
        case 100:
            return 3*quantidade
        case 200:
            return 4*quantidade
        case 300:
            return 5.50*quantidade
        case 400:
            return 7.5*quantidade
        case 500:
            return 3.5*quantidade
        case 600:
            return 2.8*quantidade
        default:
            return "opção invalida"
    }
}
console.log(pedidoSelecionado(100,2))
console.log(pedidoSelecionado(200,2))
console.log(pedidoSelecionado(300,2))
console.log(pedidoSelecionado(400,2))
console.log(pedidoSelecionado(500,2))
console.log(pedidoSelecionado(600,2))
console.log(pedidoSelecionado(700,2))