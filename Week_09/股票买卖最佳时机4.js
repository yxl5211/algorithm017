/**三维数组动态方程
dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
同3一致，只需要把2换为k,函数多一个参数值k即可。
 */
var maxProfit = function(k, prices) {
    let n = prices.length;
    if (n === 0) return 0;
    let maxTime = k;
    let dp = Array.from(new Array(n), () => new Array(maxTime + 1))
    for (let i = 0; i < n; i++) {
        for (let r = 0; r <= maxTime; r++) {
            dp[i][r] = new Array(2).fill(0);
        }
    }
    for (let i = 0; i < n; i++) {
        for (let k = maxTime; k >= 1; k--) {
            if (i === 0) {
                dp[i][k][0] = 0;
                dp[i][k][1] = -prices[i]
                continue;
            }
            dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
            dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
        }
    }
    return dp[n - 1][maxTime][0]
}