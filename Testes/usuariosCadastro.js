let cadastrosConcluidos = [],usuariosRecusados =[];
function opcaoDeCadastro(quantidade,...usuariosCadastro){// função que recebe um numero, equivalente a quantidade de repetições para validação dos nomes, e nomes de usuários
    // esta repetição é para validar se todos os caracteres do nome são letras, caso haja numeros, apresente "erro"
    for (let j=0; j<=usuariosCadastro.length; j++){ // seleciona o primeiro valor do Array e verifica se há um numero no meio da string
        for (let k=0; k<=usuariosCadastro[j];k++){
            if (typeof usuariosCadastro[j].charAt(k)!== "String"){
                console.log("Não escreva numero")
            }
        }
    }

    for(let i=0;i<=quantidade;i++) { // repete a validação, até a quantidade de vezes desejadas for alcançada
        if(usuariosCadastro[i].length>=5){ // caso a quantiade 
            cadastrosConcluidos.push(usuariosCadastro[i]);
        } 
        else if(usuariosCadastro[i].length<5){
            usuariosRecusados.push(usuariosCadastro[i]);
        }
    }
  return console.log("Recusados: ",usuariosRecusados,"\nAceitos: ",cadastrosConcluidos,"\n", );
}
console.log(opcaoDeCadastro(3,"1oao","Christian","Antonio","Millena"));