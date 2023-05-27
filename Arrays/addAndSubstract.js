function addAndSubstract(nums) {

    let sumOld = 0;
    let sumNew = 0;

for (let i = 0; i < nums.length; i++) {
    let currentNum = Number(nums[i]);

    sumOld += currentNum;

    if (currentNum % 2 === 0) {
        currentNum += i;
    } else {
        currentNum -= i;
    }
    
    nums[i] = currentNum;
    sumNew += currentNum;
}
    console.log(nums);
    console.log(sumOld);
    console.log(sumNew);

}
