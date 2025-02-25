function compararString(string1,string2){
    if(string1==string2||string1.toUpperCase()==string2.toUpperCase()){
        return true
    }else{
        return false
    }
}
console.log(compararString('paLavra','Palavra'))