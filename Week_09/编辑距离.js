/**
 * 如果word1[i]与word2[j]相同，显然dp[i][j] = dp[i-1][j-1]
 * 如果二者不同，那么dp[i][j]可以通过
 * 1、在dp[i-1][j-1]的基础上做replace操作达到目的
 * 2、在dp[i-1][j]的基础上做insert操作达到目的
 * 3、在dp[i][j-1]的基础上做delete操作达到目的
 * 取三者最小情况即可。
 */
var minDistance = function(word1, word2) {
    let n1 = word1.length;
    let n2 = word2.length;
    let dp = new Array(n1 + 1).fill(0).map(() => new Array(n2 + 1).fill(0)) //定义二维数组同时初始化为0
    console.log(dp)
    for (let j = 1; j <= n2; j++) {
        dp[0][j] = dp[0][j - 1] + 1;
    }
    for (let i = 1; i <= n1; i++) {
        dp[i][0] = dp[i - 1][0] + 1;
    }
    for (let i = 1; i <= n1; i++) {
        for (let j = 1; j <= n2; j++) {
            if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1);
            }
        }
    }
    return dp[n1][n2];
}