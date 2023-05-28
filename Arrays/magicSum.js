function magicSum(arr, num) {

for (let i = 0; i < arr.length; i++) {
    let currNum = Number(arr[i]);
    for (let j = i+1; j < arr.length; j++) {
        let nextNum = Number(arr[j]);
        let sum = currNum + nextNum;
        if (sum === num) {
            console.log(`${currNum} ${nextNum}`);
        }
    }
}

}
