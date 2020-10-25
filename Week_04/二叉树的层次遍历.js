/**二叉树的层次遍历，从左往右访问所有结点
 * 1、设定边界，定义需要用到的结果数组，使用的队列
 * 2、队列不空，定义当前层需要遍历的次数
 * 3、定义当前层的结点集合
 * 4、遍历当前层的结点，依次出队，且出队的元素结点放入当前层的结点集合中
 * 5、左节点存在，入队，更新queue,右节点存在，入队，更新queue
 * 6、遍历完成后，将结点集合放在res结果数组中。最后返回。
 */
const levelOrder = (root) => {
    if (!root) return [];
    const res = [];
    const queue = [root];
    while (queue.length) {
        const curlevLen = queue.length;
        const curlevNode = [];
        for (let i = 0; i < curlevLen; i++) {
            const node = queue.shift(); //结点依次出队
            curlevNode.push(node.val); //结点依次存入当前结点集合中
            node.left && queue.push(node.left); //左节点存在，入队，更新queue
            node.right && queue.push(node.right);
        }
        res.push(curlevNode);
    }
    return res;
}