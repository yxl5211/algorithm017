const permute = (nums) => {
    const ans = [];
    const trackback = (path, set) => {
        if (path.length === nums.length) {
            ans.push(path.concat());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (!set.has(i)) {
                path.push(nums[i]);
                set.add(i);

                trackback(path, set);
                path.pop(); //撤回
                set.delete(i);
            }
        }
    }
    trackback([], new Set());
    return ans;
}