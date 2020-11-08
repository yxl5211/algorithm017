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