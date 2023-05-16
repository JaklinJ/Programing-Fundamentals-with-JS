function division(number) {
    let num = number;
    let result = 0;
    if ((num%2) == 0) {
        result = 2;
    } 
    if ((num%3) == 0) {
        result = 3;
    } 
    if ((num%6) == 0) {
        result = 6;
    }
    if ((num%7) == 0) {
        result = 7;
    } 
    if ((num%10) == 0) {
        result = 10;
    } else if ((num%2) !== 0 && (num%3) !== 0 && (num%6) !== 0  && (num%7) !== 0 && (num%10) !== 0) {
        console.log("Not divisible");
    }
    if (result > 0) {
    console.log(`The number is divisible by ${result}`);
    }
}
division(1643)