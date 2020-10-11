var levelOrder = function(root) {
    const res = [];
    const search = (nums, node, k) => {
        if (!node) {
            return;
        }
        if (nums[k] === undefined) {
            nums[k] = [];
        }
        nums[k].push(node.val);
        for (let i = 0; i < node.children.length; i++) {
            search(nums, node.children[i], k + 1);
        }
    }
    search(res, root, 0);
    return res;
}