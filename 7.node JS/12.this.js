console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('---------------')
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) 

    this.perigo='!!!' // global 
}

this.perigo='!!!' // module.exports
logThis()

const arrow =()=> {
    console.log('---------------')
    console.log('Dentro de uma arrow Function...')
    console.log(this === global)
    console.log(this === exports)
    console.log(this === module.exports)
    this.perigo='!!!'// module.exports
} 
arrow()