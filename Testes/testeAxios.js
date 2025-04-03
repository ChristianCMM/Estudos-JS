const porta = 8080
const axios = require('axios')
// const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const url = "https://api.github.com/users/ChristianCMM/repos"

async function getRepos() {
    axios
        .get(url)
        .then(response=>{
            console.log(response.data)
            console.log('Success')
        })
        .catch(e=>{
            console.log(e)
            console.log('Error')
        })
        .finally(()=>{
            console.log('Finalizou a request')
        })
}

getRepos()