var lengthOfLIS = function(nums) {
    let n = nums.length;
    if (n === 0) return 0;
    let dp = new Array(n).fill(1);
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1)
        }
        res = Math.max(res, dp[i]);
    }
    return res;
}