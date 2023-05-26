function equalArr(input1, input2) {

    let sum = 0;
    let isIdentical = true;
for (let i = 0; i< input1.length; i++) {
    input1[i] = Number(input1[i]);
}
for (let i = 0; i < input2.length; i++) {
    input2[i]= Number(input2[i]);
}

for (let index = 0; index < input1.length; index++) {

    if (input1[index] !== input2[index]) {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
        isIdentical = false;
        break;
    } else {
        sum += input1[index];
    }
}
if (isIdentical) {
    console.log(`Arrays are identical. Sum: ${sum}`
    )
}

}
