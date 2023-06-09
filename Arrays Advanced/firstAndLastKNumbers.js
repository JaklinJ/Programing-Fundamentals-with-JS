function firstAndLastKNumbers(arr) {

let k = arr[0];

let firstNumber = arr.slice(1,k+1);
let lastKNumbers = arr.slice(-k);
console.log(firstNumber.join(" "));
console.log(lastKNumbers.join(" "));

}
