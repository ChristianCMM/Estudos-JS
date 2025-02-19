const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums){
    if (x==5){
        break // BREAK não age no laço IF, e agirá apenas no laço mais proximo, no caso: FOR
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if (y==5){
        continue //  CONTINUE interrompe a repetição do código e vai para a proxima, onde inibiu o indice "5=6" do console
    }
    console.log(`${y}=${nums[y]}`)
}

// não interessante // laço rotulado, colocando um nome com ":", rotula o laço para que possa ser feito uma ação em cima dele
externo: for (a in nums){
    for (b in nums){
        if (a == 2 && b == 3){
            break externo // ação feita em cima do rotulo "externo:", onde o break foi atribuido a ele
        }
        console.log(`Par = ${a}, ${b}`)
    }
}
console.log("FIM!")