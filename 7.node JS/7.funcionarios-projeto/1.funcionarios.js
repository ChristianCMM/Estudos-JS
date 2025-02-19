const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// pega os dados da URL e atribui com "then" com uma função a "funcionarios" as informações da site
axios.get(url).then(response =>{
    const funcionarios = response.data
    //console.log(funcionarios)
    const mulherChinesa = funcionarios.filter(e=>
        e.pais==='China' && e.genero==='F'
    )
    const resultado = mulherChinesa.reduce((acumulador,atual)=>{
        return atual.salario < acumulador.salario ? atual: acumulador
    }) 
    console.log(resultado)
})

// desafio: encontrar a mulher chinesa com menor salario da lista