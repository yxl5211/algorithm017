var maxProfit = function(prices) {
    let n = prices.length;
    if (!n) return 0;
    let dp = new Array(n).fill(0);
    let minPrice = prices[0];
    for (let i = 1; i < n; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);
    }
    return dp[n - 1];
}