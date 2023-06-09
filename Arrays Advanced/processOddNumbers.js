function processOddNumbers(arr) {

    let result = [];
    
for (let i = 1; i < arr.length; i +=2) {
    let currentNum = arr[i];
    let doubleNum = currentNum * 2;

    result.unshift(doubleNum);
}
    return result.join(" ");
}
