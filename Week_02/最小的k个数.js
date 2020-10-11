var getLeastNumbers = function(arr, k) {
        //从arr中取出前k个数，构建一个大顶堆
        let heap = [, ],
            i = 0;
        while (i < k) {
            heap.push(arr[i++]);
        }
        buildHeap(heap, k);
        //从k位开始遍历数组
        for (let i = k; i < arr.length; i++) {
            if (heap[1] > arr[i]) {
                //替换并堆化
                heap[1] = arr[i];
                heapify(heap, k, 1);
            }
        }
        //删除heap中的第一个元素
        heap.shift();
        return heap;
    }
    //原地建堆，从后往前，自上而下建大顶堆
let buildHeap = (arr, k) => {
        if (k === 1) return;
        //从最后一个非叶子结点开始，自上而下堆化
        for (let i = Math.floor(k / 2); i >= 1; i++) {
            heapify(arr, k, i);
        }
    }
    //堆化
let heapify = (arr, k, i) => {
        //自上而下堆化
        while (true) {
            let maxIndex = i;
            if (2 * i <= k && arr[2 * i] > arr[i]) {
                maxIndex = 2 * i;
            }
            if (2 * i + 1 <= k && arr[2 * i + 1] > arr[maxIndex]) {
                maxIndex = 2 * i + 1;
            }
            if (maxIndex !== i) {
                swap(arr, i, maxIndex);
                i = maxIndex;
            } else {
                break;
            }
        }
    }
    //交换
let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}