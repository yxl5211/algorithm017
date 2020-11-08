var uniquePathsWithObstacles = function(obstacleGrid) {
        if (obstacleGrid[0][0] === 1) return 0;
        let m = obstacleGrid.length;
        let n = obstacleGrid[0].length;
        let dp = new Array(m);
        for (let i = 0; i < m; i++) dp[i] = new Array(n);
        dp[0][0] = 1;
        for (let i = 1; i < m; i++) {
            dp[i][0] = obstacleGrid[i][0] === 1 || dp[i - 1][0] === 0 ? 0 : 1;
        }
        for (let i = 1; i < n; i++) {
            dp[0][i] = obstacleGrid[0][i] === 1 || dp[0][i - 1] === 0 ? 0 : 1;
        }

        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
            }
        }
        return dp[m - 1][n - 1];
    }
    //将维度,有问题，输出为NAN
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = new Array(n);
    dp[0] = obstacleGrid[0][0] === 0 ? 1 : 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[j] = 0;
                continue;
            }
            if (j - 1 >= 0 && obstacleGrid[i][j - 1] === 0) dp[j] += dp[j - 1];
        }
    }
    return dp[n - 1];
}