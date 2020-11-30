var numDecodings = function(s) {
    const n = s.length;
    const dp = Array.from({ length: n + 1 }, () => 0);
    dp[0] = 1;
    for (let i = 0; i < n - 1 && dp[i]; i++) {
        if (s[i] != '0') {
            dp[i + 1] += dp[i];
            if (parseInt(s[i] + s[i + 1]) <= 26) {
                dp[i + 2] = dp[i];
            }
        }
    }
    if (s[n - 1] != '0') dp[n] += dp[n - 1];
    return dp[n];
}
var numDecodings = function(s) {
    let n = s.length;
    if (s === null || n === 0) return 0;
    let dp = Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] !== "0" ? 1 : 0;
    for (let i = 2; i <= n; i++) {
        let one = +s.slice(i - 1, i);
        let two = +s.slice(i - 2, i);
        if (two >= 10 && two <= 26) dp[i] = dp[i - 2];
        if (one >= 1 && one <= 9) dp[i] += dp[i - 1];
    }
    return dp[n]
};