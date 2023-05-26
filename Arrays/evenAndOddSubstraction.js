function evenAndOddSubstraction(nums) {
let sumEven = 0;
let sumOdd = 0;

 for (let i = 0; i < nums.length; i++) {
    let currNum = Number(nums[i]);
    if (currNum % 2 === 0) {
        sumEven += currNum;
    } else {
        sumOdd += currNum;
    }
 }
let diff = sumEven - sumOdd;
console.log(diff);
}
