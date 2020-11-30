/**一维数组动态规划
 * dp[i] = max(dp[i-1], prices[i]-minprice)
 */
var maxProfit = function(prices) {
    let len = prices.length
    if (len === 0) return 0
    let dp = Array(len).fill(0)
    let minprice = prices[0]
    for (let i = 1; i < len; i++) {
        minprice = Math.min(minprice, prices[i])
        dp[i] = Math.max(dp[i - 1], prices[i] - minprice)
    }
    return dp[len - 1]
}