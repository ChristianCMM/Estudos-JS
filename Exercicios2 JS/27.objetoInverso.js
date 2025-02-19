const inverter=meuObjeto=>{
    let objetoInvertido=Object.fromEntries(Object.entries(meuObjeto).map(([chave,valor])=>[valor,chave]))
    return objetoInvertido 
}
console.log(inverter({a:1,b:2,c:3}))