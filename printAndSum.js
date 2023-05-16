function printAndSum(num1, num2) {
    let number1 = num1;
    let number2 = num2;
    let result = "";
    let sum = 0;

    for (let i = number1; i <= number2; i++) {
        result += i + " ";
        sum += i;
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)