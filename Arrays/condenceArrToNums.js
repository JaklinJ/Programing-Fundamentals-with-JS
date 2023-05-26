function condenceArrToNums(nums) {

    let res = [];
    while (nums.length > 1) {
        for (let i = 0; i < nums.length - 1; i++) {
            res[i] = nums[i] + nums[i + 1];
        }
        nums = res;
        res = [];
    }

    console.log(nums.join(""));

}
