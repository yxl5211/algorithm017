var slidingPuzzle = function(board) {
    let target = [1, 2, 3, 4, 5, 0]
        //邻接数组，滑板板上面的每个位置都可以移动的方位
    let neighbor = [
            [3, 1],
            [4, 0, 2],
            [5, 1],
            [0, 4],
            [1, 3, 5],
            [2, 4]
        ]
        //移动状态数组，存储当次移动的移动状态
        //数组前面存储当前未遍历状态，后面存储下次将要遍历的状态
    let queue = [
        [].concat(...board)
    ]
    let visited = {},
        step = 0
    while (queue.length) {
        //queue长度会发生变化，这里len需要事先存储
        let len = queue.length
            //依次将当前步数状态转化为下一步的状态
        while (len--) {
            const cur = queue.shift();
            if (cur.toString() === target.toString()) return step
            let idx = cur.findIndex(v => !v)
                //依次从邻接数组移动滑至空位
            for (let j = 0; j < neighbor[idx].length; j++) {
                let adj = neighbor[idx][j]
                let list = [...cur];
                //移动滑块，交换位置，表示已移动
                [list[adj], list[idx]] = [list[idx], list[adj]]
                //新状态添加进移动状态数组，准备下次移动
                if (!visited[list.toString()]) {
                    queue.push(list)
                    visited[list.toString()] = true
                }
            }
        }
        //循环结束表明所有状态已经转化至下一步，此时步数加一，开始循环下一步
        step++
    }
    return -1
}