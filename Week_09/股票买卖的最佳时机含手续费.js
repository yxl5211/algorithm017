/**思路：
假设每次买股票的时候付手续费（题目是说每笔交易付手续费，即一次完整的买卖付一次手续费）；
1.状态定义：定义一个变量dp[i][j]，表示第i天的时候用户的收益，j是一个枚举对象，j=1表示用户当天账户持股，j=0表示用户当天没持股。
2.要让利润最大，只要确定每天的收益选择是最佳的选择，每天需要相比前一天比较选出最好的选择，即可得出最后的最佳选择。
3.状态转移方程：
dp[i][0]:代表当天不持股的收益，当天不持股可能由两种情况得来：
A.昨天没持股B.昨天持股，今天卖了。那么dp[i][0]的最佳收益选择就是Math.max(dp[i-1][0],dp[i-1][1]+prices[i])
dp[i][1]:代表当天持股的收益，当天持股可能由两种情况得来：
A.昨天也持股B.昨天没持股，今天买了。那么dp[i][1]的最佳收益选择就是Math.max(dp[i-1][1],dp[i-1][0]-prices[i]-fee)
4.思考初始状态值的收益：
dp[0][0]:0;
dp[0][1]:0-fee-price[i]
5.最终要求的值是dp[prices.length-1][0],最后一天不持股的收益 */
var maxProfit = function(prices, fee) {
    let dp = new Array(prices.length); //i行，对应i天
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(2); //每行有2列，对应2种持股状态
    }
    dp[0][0] = 0;
    dp[0][1] = 0 - fee - prices[0];
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i] - fee);
    }
    return dp[prices.length - 1][0]
};