function triplesOfLatinLetters(num) { 
    let res = '';
for (let i = 1; i <= num; i++) {
    let letter = String.fromCharCode(95 + i);
            res += letter + " "
    for (let j = 1; j <= num; j++) {
        let letter = String.fromCharCode(95 + j);
            res += letter + " "
        for (let k = 1; k <= num; k++) {
            let letter = String.fromCharCode(95 + k);
            res += letter + " "
            console.log(res);

        }
    }
    
    res = ''
}
}
triplesOfLatinLetters(2)