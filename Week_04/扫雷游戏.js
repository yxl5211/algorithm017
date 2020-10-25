var updateBoard = function(board, click) {
    let m = board.length,
        n = board[0].length;
    let row = [-1, -1, 0, 1, 1, 1, 0, -1],
        col = [0, 1, 1, 1, 0, -1, -1, -1]; //对应的数组坐标
    let isLive = (x, y) => x >= 0 && x < m && y >= 0 && y < n; //越界判断
    let dfs = (x, y) => {
        let count = 0;
        if (!isLive(x, y) || board[x][y] !== 'E') return;
        for (let i = 0; i < 8; i++) {
            //依次判断周围八个点
            if (isLive(x + row[i], y + col[i]) && board[x + row[i]][y + col[i]] === 'M') //记录***数
                count++;
        }
        if (count === 0) {
            //如果这八个坐标没有***，直接dfs这八个坐标
            board[x][y] = 'B';
            for (let j = 0; j < 8; j++) {
                dfs(x + row[j], y + col[j]);
            }
        } else {
            board[x][y] = String(count); //这里用字符是因为board是字符数组
        }
    }
    let [x, y] = click; //数组解构es6写法
    board[x][y] === 'M' ? board[x][y] = 'X' : dfs(x, y);
    return board;
}