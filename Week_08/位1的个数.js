/**
 * 按位与运算，将其最低位置为0，其他位置上的数不变，n &=(n-1),清零最低位的1，要是为1，则次数加一
 */
var hammingWeight = function(n) {
    let sum = 0;
    while (n !== 0) {
        sum++;
        n &= (n - 1);
    }
    return sum;
}