var maxProduct = function(nums) {
    let max = -Infinity;
    let imax = 1,
        imin = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) { //当前元素为负数，则最大最小值相互交换。
            let tmp = imax;
            imax = imin;
            imin = tmp;
        }
        imax = Math.max(imax * nums[i], nums[i]); //更新当前最大值
        imin = Math.min(imin * nums[i], nums[i]); //更新当前最小值
        max = Math.max(imax, max); //更新全局最大值
    }
    return max;
}