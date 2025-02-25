const areaTriangulo=(base,altura)=>{
    let areaDoTriangulo
    areaDoTriangulo=(base*altura)/2
    return `${areaDoTriangulo.toFixed(2)} m²`
}
console.log(areaTriangulo(10,15))
console.log(areaTriangulo(7,9))
console.log(areaTriangulo(9.25,13.1))