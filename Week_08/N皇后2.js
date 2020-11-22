var totalNQueens = function(n) {
    let res = 0;
    const dfs = (n, row, col, pie, na) => {
        if (row >= n) {
            res++;
            return;
        }
        let bits = ~(col | pie | na) & ((1 << n) - 1) //将所能放置Q的位置由0变成1，以便进行后续的位遍历
        while (bits > 0) {
            let p = bits & -bits //取到最低位的1
            bits = bits & (bits - 1) //表示在p位置上放入皇后
            dfs(n, row + 1, col | p, (pie | p) << 1, (na | p) >> 1);
        }
    }
    dfs(n, 0, 0, 0, 0);
    return res;
}