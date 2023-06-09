function negativeOrPositiveNumbers(arr) {

let result = [];

for (let i = 0; i < arr.length; i++) {
    let currentNum = Number(arr[i]);

    if (currentNum >= 0) {
        result.push(currentNum);
    } else {
        result.unshift(currentNum);
    }
}

console.log(result.join("\n"));

}
