// Usando Nodemon e Lodash

// "_" geralmente usado para armarzenar os dados no "lodash"
const _ = require('lodash') // Busca o "index.js", dentro de "lodash"

// numero aleatorio entre 1 e 1000 a cada 2 segundos (2000 ms)
setInterval(()=>console.log(_.random(1,10)),2000) 