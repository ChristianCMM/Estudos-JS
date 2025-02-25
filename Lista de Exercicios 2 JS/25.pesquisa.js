const buscarPalavrasSemelhantes=(palavra,semelhantes)=>{
    return semelhantes.filter(p=>p.includes(palavra)) // 'includes' verifica se a string está presente em outra
}
console.log(buscarPalavrasSemelhantes('pro',['programação','mobile','profissional']))
console.log(buscarPalavrasSemelhantes('python',['Javascript','java','c++']))