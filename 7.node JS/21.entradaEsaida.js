const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

//stdout = saida padrão do sistema (monitor)
if (anonimo){
    process.stdout.write('Fala anonimo!\n')
    process.exit()
}else{//stdin = entrada padrão do sistema (teclado)
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data',data=>{ // "data" é o evento que o usuário preenche
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit() //"exit" para o programa
    })
}