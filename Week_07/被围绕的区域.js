var solve = function(board) {
    let m = board.length;
    if (m == 0) { return };
    let n = board[0].length;
    let find = (p) => {
        while (p != parent[p]) {
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    }
    let union = (p, q) => {
            let rootP = find(p);
            let rootQ = find(q);
            if (rootP == rootQ) {
                return;
            }
            parent[rootP] = rootQ;
        }
        // A类根节点
    let cannotSet = 'not';
    let parent = [];
    parent[cannotSet] = cannotSet;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            parent[i + '-' + j] = i + '-' + j;
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 遇到O字符
            if (board[i][j] == 'O') {
                // 边缘O。不能替换，将其查并到A类下
                if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
                    union(i + '-' + j, cannotSet);
                }
                // 紧跟边缘O的内部O，题意可知同样不能替换，将其查并到A类下
                else {
                    i - 1 >= 0 && board[i - 1][j] == 'O' && union(i + '-' + j, (i - 1) + '-' + j);
                    i + 1 < m && board[i + 1][j] == 'O' && union(i + '-' + j, (i + 1) + '-' + j);
                    j - 1 >= 0 && board[i][j - 1] == 'O' && union(i + '-' + j, i + '-' + (j - 1));
                    j + 1 < n && board[i][j + 1] == 'O' && union(i + '-' + j, i + '-' + (j + 1));
                }
            }
        }
    }
    // 从非边缘下开始遍历替换不属于A类下的O字符为X，完毕即为所求
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (board[i][j] == 'O' && find(i + '-' + j) != find(cannotSet)) {
                board[i][j] = 'X';
            }
        }
    }
};