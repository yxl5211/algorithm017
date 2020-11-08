/**
 * 自底向上，初始化最下面的一行为1，申请一个数组存放当前最近的一行数组，进行相加最优步数。
 */
var uniquePaths = function(m, n) {
    let cur = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            cur[j] += cur[j - 1];
        }
    }
    return cur[n - 1];
}