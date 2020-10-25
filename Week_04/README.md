# 学习笔记 第四周

## 主要内容

    这一周的内容，有些难度，课后作业做起来，看题解都很费劲，主要还是因为自己的基础弱。
    主要有深度优先搜索和广度优先搜索，贪心算法，以及二分查找

### DFS 递归模板

    //JavaScript
    const visited = new Set()
    const dfs = node => {
    if (visited.has(node)) return
    visited.add(node)
    dfs(node.left)
    dfs(node.right)
    }

### BFS 递归模板

    //JavaScript
    const bfs = (root) => {
        let result = [], queue = [root]
        while (queue.length > 0) {
            let level = [], n = queue.length
            for (let i = 0; i < n; i++) {
                let node = queue.pop()
                level.push(node.val)
            if (node.left) queue.unshift(node.left)
            if (node.right) queue.unshift(node.right)
            }
        result.push(level)
     }
     return result

};

## 贪心算法

    贪心算法：做当下局部最优判断，不能回退
    回溯算法：做了局部判断，有回退操作，则回溯，相当于暴力求解。
    动态规划：最优判断+回退。一般是自底向上。

### 区别

    贪心和动态不同之处在于它对于每个子问题的解决方案都做出选择，且不能回退。
    动态规划会保存以前的运算结果，并根据以前结果对当前进行选择，有回退功能。

## 二分查找

### 二分查找代码模块

    /* JavaScript */
    let left = 0, right = len(array) - 1
    while (left <= right) {
        let mid = (left + right) >> 1
        if (array[mid] === target) { /*find the target*/; return }
        else if (array[mid] < target) left = mid + 1
        else right = mid - 1
    }
