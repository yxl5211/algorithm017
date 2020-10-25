var largestValues = function(root) {
    let res = [];
    const dfs = (node, res, level) => {
        if (!node) return; //terminator
        //process current
        if (level >= res.length) {
            res[level] = node.val; //为当前值填写最小值占位
        } else {
            res[level] = Math.max(res[level], node.val); //与对应层值对比，求出最值
        }
        //drill down
        dfs(node.left, res, level + 1);
        dfs(node.right, res, level + 1);
    }
    dfs(root, res, 0); //初始化
    return res;
}