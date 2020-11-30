var uniquePaths = function(m, n) {
    let dp = Array.from({ length: m }, () => Array.from({ length: n }, () => 0))
    console.log(dp) //创建dp二维数组m行n列，n元素全置为0
    for (let i = 0; i < m; i++) dp[i][0] = 1 //第一列走法只有一种
    for (let j = 0; j < n; j++) dp[0][j] = 1 //第一行走法只有一种
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]; //当前位置是从左边或上边走过来的。
        }
    }
    return dp[m - 1][n - 1]
}

var uniquePaths = function(m, n) {
    let cur = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            cur[j] += cur[j - 1];
        }
    }
    return cur[n - 1]
}