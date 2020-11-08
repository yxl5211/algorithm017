var maxSubArray = function(nums) {
    let res = nums[0];
    let sum = 0;
    for (let curNum of nums) {
        if (sum > 0) { //当前和为正数，则将当前值加入和中，否者，将当前值赋值给当前和。
            sum += curNum;
        } else {
            sum = curNum;
        }
        res = Math.max(res, sum);
    }
    return res;
}