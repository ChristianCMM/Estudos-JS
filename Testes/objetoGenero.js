function maiorIdade(){
    if(this.getIdade>=18){
        return 'Você é maior de idade'
    }else if(this.getIdade<18){
        return 'Você é menor de idade'
    }else{
        return 'Escreva uma idade válida!'
    }
}

function Pessoa(nome=undefined,idade=undefined,genero=''){
    this.getNome=nome
    this.getIdade=idade
    this.getGenero=genero
}

function saudacao(){ // adicionando a função "saudação" ao objeto
    if(this.getGenero.charAt(0)=='m'||this.getGenero.charAt(0)=='M'){
        letra='o'
    }else if(this.getGenero.charAt(0)=='f'||this.getGenero.charAt(0)=='F'){
        letra='a'
    }else if(this.getGenero.charAt(0)!='f','F'&&this.getGenero.charAt(0)!='m','M'){
        letra='o'
    }
    if(this.getNome==''||this.getNome==undefined){
        return `Escreva um nome válido!`
    }else{
        return`Olá ${this.getNome}, seja bem vind${letra}!`
    }
}

function criandoObjeto(nome,idade,genero){
    return novoCasdastro=new Pessoa(nome,idade,genero)//inicializando o objeto
}

const cliente=criandoObjeto("millena",22,'feminino')

console.log(saudacao.call(cliente))
console.log(maiorIdade.call(cliente))
