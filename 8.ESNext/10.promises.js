// Promisse é um objeto que faz uma ação que pode ser aceita ou rejeitada
function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(frase) // aceita apenas 1 parametro
            //reject()
        },segundos*1000)
    })
}

falarDepoisDe(3, 'Que legal')
    .then(frase => frase.concat('?!?'))// "then" serve para chamar o "Promisse"
    .then(outraFrase => console.log(outraFrase))
    .catch(e=> console.log(e))// é usado para tratar um 'reject()'