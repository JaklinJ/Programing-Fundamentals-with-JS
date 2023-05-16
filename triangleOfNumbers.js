function triangleOfNumbers(number) {
    let num = number;
    for (let row = 1; row <= num; row++) {
        for (let col = 1; col <= row; col++) {
            console.log(`${row} `)
        }
        console.log();
    }
}
triangleOfNumbers(5)