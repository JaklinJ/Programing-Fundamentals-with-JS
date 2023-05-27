function maxNumber(numbers) {

    let result = "";

for (let i = 0; i < numbers.length; i++) {
    let isBigger = true;
    let firstNum = Number(numbers[i]);
    for (let j = i +1; j < numbers.length; j++) {
        let secondNum = Number(numbers[j]);
        if (firstNum <= secondNum) {
            isBigger = false;
            break;
        }
    }
    if (isBigger) {
        result +=`${firstNum} `;
    }
}
console.log(result);

}
