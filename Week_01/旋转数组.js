/**
 * 参数{number[]} nums
 * 参数{number}k
 * return {void}
 */
// const rotate = (nums, k) => {
//     for (let i = 0; i < k; i++) {
//         //将数组最后一个元素添加到该数组的第一个位置上
//         nums.unshift(nums.pop());
//     }
// }
/**
 * 
 * @param {*} nums 
 * @param {*} k 
 * unshift+splice
 * nums.splice(nums.lemgth-k)取出需要旋转的数组
 * nums.unshift(),将需要旋转的元素一个一个的添加到队首。
 */
const rotate = (nums, k) => {
    nums.unshift(...nums.splice(nums.length - k))
}