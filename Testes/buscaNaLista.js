const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response =>{

    const filtroSalario = (min=2000,max=20000) => funcionarios.salario < max && funcionarios.salario > min ? pessoas : "erro"
    const filtroGenero = (e)=> e.genero == "F"

    const funcionarios = response.data
    const funcionariosComSalario = funcionarios.filter(filtroSalario)
    const resultado = funcionariosComSalario.filter(filtroGenero)

    console.log(resultado.map(`ID Das Mulheres com salario entre os valores selecionados ${e=>e.id}`))
})