const a=1
const b=2
const c=3

const obj1={a:a,b:b,c:c} //forma antiga de criar um atributo de um objeto
const obj2={a,b,c} //nova forma antiga de criar um atributo de um objeto
console.log(obj1,obj2)

const nomeAtributo = 'nota'
const valorAtributo=7.87

// formas de declarar atributos para objetos
const obj3={}
obj3[nomeAtributo]=valorAtributo /*atribuindo um valor com um nome diferente (Ex: a:b) */
console.log(obj3)

const obj4={[nomeAtributo]:valorAtributo}
console.log(obj4)

const obj5={ 
    funcao1: function(){// antigo
        // ...
    },
    funcao2(){ // novo
        //
    }
}
console.log(obj5)