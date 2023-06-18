function primeNumberChecker(num) {

    let isPrime = true;
    if (num === 1) {
        isPrime = true;
    }
for (let i = 2; i < num/2; i++) {
    if (num % i === 0) {
       isPrime = false; 
    } 
}
    console.log(isPrime);
}
