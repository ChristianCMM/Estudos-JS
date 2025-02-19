const contadorA = require('./8.instanciaUnica')
const contadorB = require('./8.instanciaUnica')

const contadorC = require('./9.instanciaNova')()
const contadorD = require('./9.instanciaNova')()

// ao incrementar o A, o valor de B também irá mudar por conta do cache
contadorA.incrementar()
contadorA.incrementar()
console.log(contadorA.valor,contadorB.valor) 

// neste exemplo, não irá mudar o valor de B pois, na função construtora, é criada uma nova instancia

contadorC.incrementar()
contadorC.incrementar()
console.log(contadorC.valor,contadorD.valor)