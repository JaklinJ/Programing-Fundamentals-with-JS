function calculator(num1, mathOperator, num2) {
let result =0;
  if(mathOperator === '+') {
    result = num1 + num2;
console.log(result.toFixed(2));
  } else if (mathOperator === '-') {
    result = num1 - num2;
console.log(result.toFixed(2));
  } else if (mathOperator === '*') {
    result = num1 * num2;
console.log(result.toFixed(2));
  } else if (mathOperator === '/') {
    result = num1 / num2;
console.log(result.toFixed(2));
  }
}
