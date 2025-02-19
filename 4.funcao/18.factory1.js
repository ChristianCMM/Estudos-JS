// função factory é uma função que retorna um OBJETO
//sem função factory
const prod1={
    nome: '...',
    preco: 45
}
const prod2={
    nome: '...',
    preco: 1230
}

// com função factory
// Factory simples
function criarPessoa(){
    return{ //retornando novos objetos
        nome:'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())

/*Quando usar Função Construtora:
- Quando você precisa de maior controle sobre o processo de criação de objetos.
- Se você precisa de lógica complexa para decidir qual tipo de objeto criar, ou para instanciar diferentes variações de um objeto.
- Para encapsular a lógica de criação, escondendo detalhes de implementação, como se o objeto é criado diretamente ou reutilizado.
- Se você prefere evitar a palavra-chave new ou a sintaxe orientada a objetos tradicional.

Vantagens:
- Maior flexibilidade no controle do processo de criação.
- Simplicidade em comparação com classes se você não precisar de herança.
- Não depende de new, então o risco de esquecer a palavra-chave new ao criar objetos é eliminado.

Quando evitar:
- Se você precisa de uma estrutura de herança clara e mais tradicional.
- Se não há necessidade de flexibilidade adicional, as classes podem ser mais diretas.
*/


