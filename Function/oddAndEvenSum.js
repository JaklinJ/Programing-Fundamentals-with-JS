function oddAndEvenSum(num) {

let numToString = num.toString();

let resultEven = 0;
let resultOdd = 0;
let numberAsStringLength = numToString.length;

for (let i = 0; i < numberAsStringLength; i++) {
    let currentNumber = Number(numToString[i]);

    if (currentNumber % 2 === 0) {
        resultEven += currentNumber;
    } else {
        resultOdd += currentNumber;
    }
}
console.log(`Odd sum = ${resultOdd}, Even sum = ${resultEven}`)
}
