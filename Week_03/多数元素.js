var majorityElement = function(nums) {
    let stack = [];
    for (let n of nums) {
        let m = stack.length;
        if (stack[m - 1] === n || !m) {
            stack.push(n)
        } else {
            stack.pop()
        }
    }
    return stack[0];
}