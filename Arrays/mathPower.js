function mathPower(num, power) {

let number = num;
let result = 1;
for (let i = 1; i <= power; i++) {
    result *= number;
}
    console.log(result);
}
