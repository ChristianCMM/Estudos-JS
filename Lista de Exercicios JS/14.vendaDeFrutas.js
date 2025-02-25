function frutaSelecionada(fruta){
    switch (fruta){
        case "maça":
            return "Não vendemos esta fruta aqui."
        case "kiwi":
            return "Estamos com escassez de kiwis."
        case "melancia":
            return "Aqui está, são 3 reais o quilo." 
        default: 
            return "Opção Inválida."
    }
}
console.log(frutaSelecionada("kiwi"))
console.log(frutaSelecionada("melancia"))
console.log(frutaSelecionada("maça"))
console.log(frutaSelecionada("uva"))