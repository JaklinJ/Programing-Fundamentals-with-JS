function sumFirstAndLast(arr) {

let firstNumber = Number(arr.pop());
let lastNumber = Number(arr.shift());

let result = firstNumber + lastNumber;

return result;

}
