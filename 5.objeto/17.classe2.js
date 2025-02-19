class Avo{
    constructor(sobrenome){
        this.sobrenome=sobrenome
    }
}
class Pai extends Avo{
    constructor(sobrenome,profissao='Professor'){
        /* chamando a superclasse de "pai"(Avo) com "SUPER", caso não seja 
        preenchido, será puxado o "sobrenome" de "Avo"*/
        super(sobrenome)    
        this.profissao=profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)