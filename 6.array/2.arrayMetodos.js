const pilotos=['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento no final do array
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemtno no inicio do array
console.log(pilotos)

// splice() pode adicionar e remover elementos do array

// adicionando:
/* "2" indice do array, "0" quantidade de elementos 
    a serem removidos, e 'elementos' a ser adicionados*/
pilotos.splice(2,0, 'Bottas','Massa') 
console.log(pilotos)

// removendo:
/* "3" indice do array, "1" quantidade de elementos 
    a serem removidos*/
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1=pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2=pilotos.slice(1,4) // novo array do indice 1 a 3 (4 não incluso)
console.log(algunsPilotos2)