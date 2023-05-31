function nonDecreasingSubset(input) {

    let newInput = [];
    let maxNum = 0;

    for (let i = 0; i < input.length; i++) {

        let currentNumber = Number(input[i]);

        if (i === 0) {
            maxNum = currentNumber;
            newInput.push(currentNumber);
        }

        let nextNum = Number(input[i + 1]);

        if (maxNum <= nextNum) {
            maxNum = nextNum;
            newInput.push(maxNum);
        }

    }
    console.log(newInput.join(" "));
}
