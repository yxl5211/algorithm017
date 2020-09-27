var nums = [0, 1, 0, 3, 12];
var movezeroes = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        let num = nums[i];
        if (num === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
}