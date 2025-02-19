function tamanhoCriancas(altura1,taxa1,altura2,taxa2){
    let i=0
    if(altura1>altura2){
        if(taxa1<taxa2){
            while(altura1>altura2){
                altura1+=taxa1
                altura2+=taxa2
                i++
            }
            console.log(`Criança 1 é mais alta, mas irá demorar ${i} anos para a Criança 2 ficar mais alta.`)
        }else if(taxa1>=taxa2){
            console.log(`Criança 1 é mais alta, e a criança 2 nunca irá ficar mais alta.`)
        }
    }else if(altura1<altura2){
        if(taxa1>taxa2){
            while(altura1<altura2){
                altura1+=taxa1
                altura2+=taxa2
                i++
            }
            console.log(`Criança 2 é mais alta, mas irá demorar ${i} anos para a Criança 1 ficar mais alta.`)
        }else if(taxa1<=taxa2){
            console.log(`Criança 2 é mais alta, e a criança 1 nunca irá ficar mais alta.`)
        }
    }
}
tamanhoCriancas(0.9,0.3,1,0.2)