var preorder = function(root) {
    const ans = [];
    const recursion = (node, res) => {
        if (!node) {
            return;
        }
        res.push(node.val);
        for (let i = 0; i < node.children.length; i++) {
            recursion(node.children[i], res);
        }
    }
    recursion(root, ans);
    return ans;
}