var twoSum = function(nums, target) {
    var dic = {};
    for (var i = 0; i < nums.length; i++) {
        var preValue = nums[i];
        var difValue = target - preValue;
        if (difValue in dic) {
            return [dic[difValue], i]
        }
        dic[preValue] = i;
    }
    return null
}