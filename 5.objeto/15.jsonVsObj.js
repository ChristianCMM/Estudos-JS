// JSON = JavaScriptObjectNotation
// JSON != Objeto
// usado em comunicação entre sistemas

const obj={a:1,b:2,c:3,soma(){return a+b+c}}
// transformando Objeto em JSON 
console.log(JSON.stringify(obj)) // OBS: não transforma a função em JSON, apenas TEXTO

// transformando JSON em Objeto
// console.log(JSON.parse("{a:1,b:2,c:3}")) // erro
//console.log(JSON.parse("{'a':1,'b':2,'c':3}")) // erro

// -> Todo parametro deve estar entre aspar "DUPLAS" (formato JSON)<-
console.log(JSON.parse('{"a":1,"b":2,"c":3}')) // correto

// JSON também suporta:
console.log(JSON.parse('{"a":1.7,"b": "string", "c": true, "d": {}, "e":[]}'))

// https://jsonlint.com/ -> JSON validator