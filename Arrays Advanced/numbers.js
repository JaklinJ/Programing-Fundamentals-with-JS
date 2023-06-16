function numbers(nums) {

    let arr = nums.split(" ").map(Number);
    let sum = 0;
    let resultArr = [];
    let isValid = true;
    
    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);
        sum += currentNum;
    }
    let avgSum = sum/arr.length;

    let count = 0;

    for (let numbers of arr) {
        if (numbers > avgSum) {
            resultArr.push(numbers);
            count++;
        }
        
    }
    if (count === 0) {
        isValid = false;
    }

    let sortedArr = resultArr.sort((a,b) => b - a);
    let endResult= sortedArr.slice(0,5);

    if (isValid) {
        console.log(endResult.join(" "));
    } else {
        console.log("No");
    }

}
