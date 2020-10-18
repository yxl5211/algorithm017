var subsets = function(nums) {
    let res = [];
    let t = [];
    const dfs = (cur, nums) => {
        if (cur === nums.length) {
            res.push(t.slice());
            return;
        }
        t.push(nums[cur]);
        dfs(cur + 1, nums);
        t.pop(t.length - 1);
        dfs(cur + 1, nums);
    }
    dfs(0, nums);
    return res;
}