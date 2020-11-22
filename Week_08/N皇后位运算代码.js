var totalNQueens = function(n) {
    let count = 0;
    void(function dfs(row = 0, cols = 0, xy_diff = 0, xy_sum = 0) {
        if (row >= n) {
            count++;
            return;
        }
        //皇后可以放的地方，将所能放置Q的位置由0变成1，以便进行后续的位置遍历
        let bits = ~(cols | xy_diff | xy_sum) & ((1 << n) - 1);
        while (bits) {
            //保留最低位的1
            let p = bits & -bits;
            bits &= bits - 1; //表示在p位置上放入皇后
            dfs(row + 1, cols | p, (xy_diff | p) << 1, (xy_sum | p) >> 1);
        }
    })();
    return count;
}