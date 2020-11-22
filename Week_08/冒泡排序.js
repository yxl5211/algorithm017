/**
 * 1、冒泡排序
 * 算法描述
 * 比较相邻元素，如果第一个比第二个大，就交换它们两个
 * 对每一对相邻元素做同样的工作，从开始第一对到最后结尾一对，这样在最后的元素应该会是最大的数
 * 针对所有的元素重复以上步骤，除了最后一个
 * 重复以上步骤，直到排序完成。
 */

function bubbleSort(arr) {
    var len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]; //两两元素相互交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}