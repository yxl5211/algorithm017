/**
 * 选择排序：
 * 工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，
 * 然后，在从剩余未排序元素中寻找最小（大）元素，然后放到已排序序列的末尾，依次类推，直到所有的元素都排号序。
 * 算法描述：
 * 初始状态：无序区为R[1...n],有序区为空
 * 第i趟排序开始，当前有序区和无序区分别为R[1..i-1]和R(i..n).该趟排序从当前无序区中-选出关键字最小的记录R[k],
 * 将它与无序区的第1个记录R交换，使R[1..i]和R[i+1..n]分别变为记录个数增加1个的新有序区和记录减少1个的新无序区
 * n-1趟结束，数组有序化了。
 */
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) { //寻找最小的数
                minIndex = j; //将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}