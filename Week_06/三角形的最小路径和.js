var minimumTotal = function(triangle) {
    let dp = triangle;
    if (!triangle) return 0;
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle.length; j++) {
            dp[i][j] += Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
        }
    }
    return dp[0][0];
}