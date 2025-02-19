// acessando um modulo local pelo caminho relativo
const moduloA = require("../../1.moduloA")
console.log(moduloA)
console.log(moduloA.ola)

// acessando um modulo local pelo caminho absoluto
const moduloB = require("/Users/ch056188/OneDrive/JavaScript/Exercicios JS/Udemy/node JS/2.moduloB.js")
console.log(moduloB)
console.log(moduloB.bomDia)

//importando modulo inexistente (ERRO):
//const moduloC = require("../../1.moduloAB")

// acessando modulos "core" que já vem no NODE
const http = require('http') 
http.createServer((req,res)=>{ // requisição e resposta
    res.write('Bom Dia') // responde a requisição 
    res.end() // finaliza a requisição
}).listen(8080)

// buscar por "localhost:8080" no navegador