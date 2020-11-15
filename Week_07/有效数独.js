var isValidSudoku = function(board) {
    //1、初始化横纵以及小宫格
    const rows = [],
        cols = [],
        boxes = [];
    for (let i = 0; i < 9; i++) {
        rows[i] = [];
        cols[i] = [];
        boxes[i] = [];
    }
    //2、遍历填充值
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = board[i][j];
            if (value != '.') {
                if (!rows[i].includes(value)) {
                    rows[i].push(value);
                } else {
                    return false;
                }
                if (!cols[j].includes(value)) {
                    cols[j].push(value);
                } else {
                    return false;
                }
                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3); //对应的盒子
                if (!boxes[boxIndex].includes(value)) {
                    boxes[boxIndex].push(value);
                } else {
                    return false;
                }
            }
        }
    }
    //3、如果没有问题，返回真
    return true;
}