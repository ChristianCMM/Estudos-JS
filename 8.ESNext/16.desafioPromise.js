// ler o arquivo "dados.txt" e encapsular em uma promise para retornar o texto do arquivo
const fs = require('fs')
const path = require('path')

function lendoArquivo(arquivo){
    return new Promise(function(resolve){
        const caminho = path.join(__dirname + arquivo)
        fs.readFile(caminho,'utf-8',(err,conteudo)=>{
            resolve(conteudo.toString())
        })  
    })
}
lendoArquivo('/dados.txt')
    .then(console.log)
    