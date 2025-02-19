// "fs" = FileSistem
const fs = require('fs')

const caminho = __dirname + '/15.arquivo.json'

// sincrono... (não recomendado, pois pode bloquear o EVENT LOOP)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono

fs.readFile(caminho, 'utf-8',(err,conteudo)=>{ // callback
    /*caso não seja um objeto, não irá conseguir ler o arquivo e apresentar o log,
    por isso, o arquivo JSON é transformado de "string" para "objeto" */
    const config = JSON.parse(conteudo) 
    if(err){
        console.log('apresenta erro')
    }
    console.log(`${config.bancoDados.host}:${config.bancoDados.port}`)
})

const config = require('./15.arquivo.json')
console.log(config.bancoDados) // é apresentado antes, pois é feito de modo "sincrono"

fs.readdir(__dirname, (err, arquivos)=>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})