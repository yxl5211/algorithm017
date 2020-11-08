var rob = function(nums) {
    let n = nums.length;
    if (n <= 1) return n === 0 ? 0 : nums[0];
    let arr1 = nums.slice(0, n - 1); //偷第一个，不偷最后一个
    let arr2 = nums.slice(1); //不偷第一个，偷最后一个
    const rob1 = (nums) => {
        let dp = [];
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);
        for (let i = 2; i < nums.length; i++) {
            dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
        }
        return dp[nums.length - 1];
    }
    return Math.max(rob1(arr1), rob1(arr2));
}