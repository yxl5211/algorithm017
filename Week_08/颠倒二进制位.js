var reverseBits = function(n) {
    let result = 0;
    //结果从右往移动空出末尾 + n从左往右移动获取末尾 + n次 = 倒序
    for (let i = 0; i < 32; i++) {
        //左移空出一位
        result <<= 1
            //n &1获取n的末位，result的末位换成n的末位
        result |= n & 1;
        //右移一位
        n >>= 1;
    }
    return result >>> 0; //无符号右移
}

var reverseBits = function(n) {
    let ans = 0
    for (let i = 0; i < 32; i++) {
        ans = (ans << 1) + (n & 1)
        n >>= 1;
    }
    return ans >>> 0
}