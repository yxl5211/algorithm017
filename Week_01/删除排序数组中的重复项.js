var removeDuplicates = function(nums) {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                nums.splice(i, 1);
                i--;
            }
        }
    }
    // nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
let len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (let i = 0; i < len; i++) {
    print(nums[i]);
}