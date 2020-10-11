var preorderTraversal = function(root) {
    const res = [];
    const preorder = (root) => {
        if (!root) {
            return;
        }
        res.push(root.val);
        preorder(root.left);
        preorder(root.right);
    }
    preorder(root);
    return res;
}