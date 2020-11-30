/**二维数组动态方程
 * 0->没有持有股票：1、昨天没持有股票，今天也选择没持有rest。2、昨天持有股票，今天选择卖掉股票：+sell的价格
 * 1->持有股票：1、昨天持有股票，今天也选择持有rest。2、昨天本没有持有股票，今天选择买股票：-buy的价格
 * dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i])
 * dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0]-prices[i])
 */
var maxProfit = function(prices) {
    let len = prices.length
    if (len <= 1) return 0;
    let dp = [
        [0, -prices[0]]
    ];
    for (let i = 1; i < len; i++) dp.push([0, 0])
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    }
    return dp[len - 1][0]
}