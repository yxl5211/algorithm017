const maxProfit = (prices) => {
    const n = prices.length; // n天
    if (n == 0) return 0
    let hold = new Array(n); // 第i天持有股票的最大收益
    let unhold = new Array(n); // 第i天不持有股票的最大收益
    hold[0] = -prices[0]; // 第0天 买了股票的收益
    unhold[0] = 0
    for (let i = 1; i < n; i++) {
        if (i == 1) { // base case
            hold[i] = Math.max(hold[i - 1], -prices[1]);
        } else {
            hold[i] = Math.max(hold[i - 1], unhold[i - 2] - prices[i]);
        }
        unhold[i] = Math.max(unhold[i - 1], hold[i - 1] + prices[i]);
    }
    return unhold[n - 1];
};
/**构建每一步的转态转移方程
一.dp[i][0]表示第i天没有持有股票
1. 情况一，如果前一天也没有持有股票，今天也继续不持有 =>dp[i-1][0]
2. 情况二，如果前一天持有股票，今天卖出了 =>dp[i-1][1]+prices[i]
二.dp[i][1]表示第i天持有股票
1. 情况一，如果前天（i-2）没有持有（这一天可能卖出了，或者一直没有持有），
那昨天（i-1）不做任何操作（度过了冻结期），今天买入股票 =>dp[i-2][0]-prices[i]
2. 情况二，如果往前一天持有股票，今天继续持有 =>dp[i-1][1] */
var maxProfit = function(prices) {
    //如果天数小于一天，没有卖出时机，收益最大为0
    if (prices.length <= 1) {
        return 0;
    }
    let dp = [];
    dp.push([0, -prices[0]]);
    dp.push([Math.max(prices[1] - prices[0], 0), Math.max(-prices[1], -prices[0])]);
    for (let i = 2; i < prices.length; i++) {
        let res = [];
        res[0] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][0])
        res[1] = Math.max(dp[i - 2][0] - prices[i], dp[i - 1][1])
        dp.push(res);
    }
    return dp[prices.length - 1][0];
};