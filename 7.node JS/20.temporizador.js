const schedule = require('node-schedule')

const tarefa1=() => schedule.scheduleJob('*5******', function () {
    console.log('Executando tarefa 1!',new Date().getSeconds())
})