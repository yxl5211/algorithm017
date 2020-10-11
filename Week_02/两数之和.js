var twoSum = function(nums, target) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        if ((target - nums[i]) in hash) {
            return [hash[target - nums[i]], i]; //返回数组中的两个数值下标索引，目标索引和当前索引。
        }
        hash[nums[i]] = i; //存入当前的元素和对应的索引i
    }
}