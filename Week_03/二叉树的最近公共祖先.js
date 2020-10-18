/**给定一个二叉树，找到该树中两个指定结点的最近公共祖先
 * 最近公共祖先：对于有根树T的两个结点p,q,最近公共祖先表示一个结点x，满足x是p,q的祖先且x的深度尽可能大（一个结点也可以是它自己的祖先）
 */
const lowestCommonAncestor = (root, p, q, l, r) => {
    if (!root || root === p || root === q) return root;
    l = lowestCommonAncestor(root.left, p, q);
    r = lowestCommonAncestor(root.right, p, q);
    return l && r ? root : l || r;
}