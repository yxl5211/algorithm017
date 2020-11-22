/**奇数偶数+位操作 */
var countBits = function(num) {
        let res = [0];
        let n = 1;
        while (n <= num) {
            let count = 0;
            if (n & 1 === 1) {
                res[n] = res[n - 1] + 1;
            } else {
                res[n] = res[n >> 1]
            }
            n++;
        }
        return res;
    }
    /**状态转移方程
     * dp(n) = dp(n/2) + n%2
     * => dp(n) = dp(n >> 1) + (n &1)
     */
var countBits = function(num) {
        let res = [0];
        let n = 1;
        while (n <= num) {
            let tmpN = n;
            res.push(res[tmpN >> 1] + (tmpN & 1));
            n++;
        }
        return res;
    }
    /**
     * n&(n-1) 清零最低位的1
     */
var countBits = function(num) {
    let dp = [0];
    let n = 1;
    while (n <= num) {
        dp[n] = dp[(n & (n - 1))] + 1;
        n++;
    }
    return dp;
}