function palindromeIntegers(arr) {

for (let i = 0; i < arr.length; i++) {

    let numberAsString = arr[i].toString();
    let reversedNumber = numberAsString.split('').reverse().join('');

    if (numberAsString === reversedNumber) {
        console.log(true);
    } else {
        console.log(false);
    }
}

}
