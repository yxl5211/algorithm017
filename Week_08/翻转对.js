var reversePairs = function(nums) {
    let count = 0;
    let mergeArr = (left, right) => {
        let i = 0,
            j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] / 2 > right[j]) {
                count += left.length - i;
                j++;
            } else {
                i++;
            }
        }
        return [...left, ...right].sort((a, b) => a - b);
    }
    let mergeSort = (arr) => {
        if (arr.length <= 1) {
            return arr;
        }
        let mid = arr.length >> 1;
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        return mergeArr(mergeSort(left), mergeSort(right));
    }
    mergeSort(nums);
    return count;
}