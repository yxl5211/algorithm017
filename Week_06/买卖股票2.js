var maxProfit = function(prices) {
    let profit_out = 0;
    let profit_in = 0 - prices[0];
    let n = prices.length;
    for (let i = 1; i < n; i++) {
        profit_out = Math.max(profit_out, profit_in + prices[i]);
        profit_in = Math.max(profit_in, profit_out - prices[i]);
    }
    return profit_out;
}
var maxProfit3 = function(prices) {
    //第一次买入，卖出的利润
    let profit_1_in = -prices[0],
        profit_1_out = 0;
    //继第一次之后，第二次买入卖出的利润
    let profit_2_in = -prices[0],
        profit_2_out = 0;
    let n = prices.length;
    for (let i = 1; i < n; i++) {
        profit_2_out = Math.max(profit_2_out, profit_2_in + prices[i]);
        //第二次买入后的利润，第一次卖出的利润 - prices[i]
        profit_2_in = Math.max(profit_2_in, profit_1_out - prices[i]);
        profit_1_out = Math.max(profit_1_out, profit_1_in + prices[i]);
        //第一次买入后，利润为-prices[i]
        profit_1_in = Math.max(profit_1_in, -prices[i]);
    }
    return profit_2_out;
}
var maxProfit4 = function(prices) {
    let n = prices.length;
    let profit_in = 0 - prices[0];
    let profit_out = 0;
    //冻结时的利润
    let profit_freeze = 0;
    for (let i = 1; i < n; i++) {
        let temp = profit_out;
        profit_out = Math.max(profit_out, profit_in + prices[i]);
        //买入时的利润= 上次冻结时的利润-当天价格
        profit_in = Math.max(profit_in, profit_freeze - prices[i]);
        //冻结时的利润 = 上次卖出时的利润
        profit_freeze = temp;
    }
    return profit_out;
}