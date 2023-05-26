function sumEvenNums(nums) {
let sum = 0;

for (let i = 0; i < nums.length; i++) {
    let currentNum = Number(nums[i]);

    if (currentNum % 2 === 0) {
        sum += currentNum;
    }
}
console.log(sum);
} 
