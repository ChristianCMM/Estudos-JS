function diaUtil(dia){
    switch (dia){
        case 1||7:
            return 'Final de Semana'
        case 2:
            return 'Dia util'
        case 3:
            return 'Dia util'
        case 4:
            return 'Dia util'
        case 5:
            return 'Dia util'
        case 6:
            return 'Dia util'
        default:
            return 'Dia Inválido'

    }
}
console.log(diaUtil(13))