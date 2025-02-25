// não foi eu quem fiz

//opção 1
function myArrayMin(arr) {
    let len = arr.length
    let min = Infinity
    while (len--) {
      if (arr[len] < min) {
        min = arr[len]
      }
    }
    return min
}

// opção 2
function myArrayMin2(arr) {
    return Math.min.apply(null, arr);
}

console.log(myArrayMin([10,5,35,65]))

console.log(myArrayMin2([10,5,35,65]))