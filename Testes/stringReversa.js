function reverseWords(str) {
    return str.split('').reverse().toString().replace(/,/g,'')
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))