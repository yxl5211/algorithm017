var permuteUnique = function(nums) {
    const ans = [];
    const vis = new Array(nums.length).fill(false);
    const backtrack = (idx, perm) => {
        //循环结束条件
        if (idx === nums.length) { //idx是下一个待填入的位置，我们已经填完了n个位置。
            ans.push(perm.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
                continue;
            } //减枝
            perm.push(nums[i]); //当前逻辑
            vis[i] = true; //当前元素遍历后为true
            backtrack(idx + 1, perm); //下一层逻辑，选择下一个值
            vis[i] = false; //清空当前值
            perm.pop(); //清空当前值。
        }
    }
    nums.sort((x, y) => x - y); //升序排列。
    backtrack(0, []); //递归调用初始化
    return ans;
}