const valor = 'Global'

function minhaFuncao(){
    console.log(valor) // vai encontrar o valor "global"
}

function exec(){
    const valor = 'Local'
    minhaFuncao()/*vai encontrar o valor "Global" e não "local", pois depende de onde 
        e função foi declarada" (Escopo lexico)*/
}
exec()