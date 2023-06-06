function factorialDivision(numOne, numTwo) {

    function firstFactorial(numOne) {
        let firstFactorial = 1;

        for (let i = numOne; i >= 1; i--) {
            firstFactorial *= i;
        }
        return firstFactorial;
    }
    let firstResult = firstFactorial(numOne);

    function secondFactorial(numTwo) {
        let secondFactorial = 1;

        for (let i = numTwo; i >= 1; i--) {
            secondFactorial *= i;
        }
        return secondFactorial;
    }
    let secondResult = secondFactorial(numTwo)
    
    let result = firstResult / secondResult;
    
    //console.log(result.toFixed(2));
    function print(value) {
        console.log(value.toFixed(2));
    }
    return print(result);
    
}
