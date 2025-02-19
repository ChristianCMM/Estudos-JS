function tipoCarro(carro){
    switch(carro){
        case "hatch":
            return "Compra efetuada com sucesso!"
        case "sedan":
            return "Tem certeza que prefere este modelo?"
        case "motocicleta":
            return "Tem certeza que prefere este modelo?"
        case "caminhonete":
            return "Tem certeza que prefere este modelo?"
        default:
            return "Não trabalhamos com este tipo de automóvel aqui"
    }
}
console.log(tipoCarro("hatch"))
console.log(tipoCarro("caminhonete"))
console.log(tipoCarro("bicicleta"))
