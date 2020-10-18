/**根据一棵树的前序遍历和中序遍历构造一棵二叉树，假设树中没有重复元素
 * 注意：找到两种遍历的左右子树下标特别重要，采用递归。
 */
var buildTree = function(preorder, inorder) {
    const map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    const helper = (p_start, p_end, i_start, i_end) => {
        if (p_start > p_end) return null;
        let rootval = preorder[p_start]; //根节点值
        let root = new TreeNode(rootval); //根结点
        let pivot = map.get(rootval); //获取根节点在inorder中的下标位置
        let leftNum = pivot - i_start; //左节点的个数
        root.left = helper(p_start + 1, p_start + leftNum, i_start, pivot - 1);
        root.right = helper(p_start + leftNum + 1, p_end, pivot + 1, i_end);
        return root;
    }
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
}