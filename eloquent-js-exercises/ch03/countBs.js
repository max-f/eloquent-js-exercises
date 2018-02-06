const countBs = (str) => {
    return countChar(str, 'B');
}

const countChar = (str, letter)  => {
    let result = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            result++
        }
    }
    return result;
}

console.log(countBs("BBBBCBB--0sdfB"));
// → 7

console.log(countChar("kakkerlak", "k"));
// → 4