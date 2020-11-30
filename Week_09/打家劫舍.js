/**二维数组的动态方程
dp[i][0]状态的定义：max $ of robbing A[0-> i] 且没偷 nums[i]
dp[i][1]状态的定义：max $ of robbing A[0-> i] 且偷了 nums[i]
dp[i][0] = max(dp[i-1][0],dp[i-1][1]);
dp[i][1] = dp[i-1][0]+nums[i];
 */
var rob = function(nums) {
        if (!nums || !nums.length) return 0
        let len = nums.length
        let dp = [
            [0, nums[0]]
        ]
        for (let i = 1; i < len; i++) dp.push([0, 0])
        for (let i = 1; i < len; i++) {
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]) //第i个房子不偷，则取第i-1个房子偷或不偷的最大值
            dp[i][1] = dp[i - 1][0] + nums[i] //第i个房子偷，则只能取i-1个房子不偷的最值+当前房子的值
        }
        return Math.max(dp[len - 1][0], dp[len - 1][1])
    }
    /**一维数组的动态方程
    dp[i]状态的定义： max $ of robbing A[0->i]
    dp[i] = max(dp[i-2] + nums[i], dp[i-1]) */
var rob = function(nums) {
    let len = nums.length
    if (len <= 1) return len === 0 ? 0 : nums[0]
    let dp = []
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    }
    return dp[len - 1]
}