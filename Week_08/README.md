# 学习笔记

## 位运算符含义

    左移 << 右移 >>
    按位或 | 为1全1
    按位与 & 有0全0
    按位取反 ~
    按位异或（相同为零，不同为一）^
    异或：相同为0，不同为1，也可以用“不进位加法”来理解
    异或操作的一些特点：
    x ^ 0 = x
    x ^ 1s = ~x //1s = ~0
    x ^ (~x) = 1s
    X ^ x = 0
    c = a ^ b => a ^ c = b, b ^ c = a //交换两个数
    a ^ b ^ c = a ^ (b ^ c) = (a ^ b) ^ c

## 指定位置的位运算

1、将 x 最右边的 n 位清零：x & (~0 << n)
2、获取 x 的第 n 位值(0 或者 1)： (x >> n) & 1
3、获取 x 的第 n 位的幂值： x & (1 << n)
4、仅将第 n 位值为 1：x | (1 << n)
5、仅将第 n 位置为 0：x &(~(1 << n))
6、将 x 最高位至第 n 位(含)清零: x & ((1 << n) -1)

## 实战位运算要点

1、判断奇偶：
x % 2 == 1 ->(x&1) ==1
x % 2 == 0 ->(x&1) ==0
2、x >> 1 -> x/2
即：x = x/2; -> x = x >> 1;
mid = (left + right)/2 -> mid = (left + right) >> 1
3、x = x &(x-1)清零最低位的 1
4、x & -X =>得到最低位的 1
5、x&~x => 0

## 布隆过滤器的实现和应用

1、一个很长的二进制向量和一系列随机映射函数。布隆过滤器可以用于检索一个元素是否存在一个集合中。
优点：空间效率和查询时间都远远超过一般算法（二进制存储），缺点：有一定的误识别率和删除困难。
案例：
1、比特币网络
2、分布式系统（Map-Reduce） - Hadoop, search engine
3、Redis 缓存
4、垃圾邮件，批评等的过滤

## LRUCache（最近最少使用）

两个要素：大小、替换策略
HashTable + DoubleLinkedList
o(1)查询
o(1)修改、更新

## 初级排序-o(n^2)

1、选择排序：
每次找最小值，然后放到待排序数组的起始位置
2、插入排序：
从前到后逐步构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
3、冒泡排序：
嵌套循环，每次查看相邻的元素如果逆序，则交换。

## 高级排序-o(N\*logN)

1、快速排序
数组取标杆 pivot,将小元素放 pivot 左边，大元素放右侧，然后依次对右边和右边的子数组继续快排，以达到整个序列有序。
注意：正常情况下数组 prepend 操作的时间复杂度是 o(n),但是可以进行特殊优化到 o(1).采用的方式是申请稍大一些的内存空间，然后在数组最开始预留一部分空间，然后 prepend 的操作则是把头下标前移一个位置即可。
java 版本

<!-- public static void quickSort(int[] array, int begin, int end) {
    if (end <= begin) return;
    int pivot = partition(array, begin, end);
    quickSort(array, begin, pivot -1);
    quickSort(array, pivot+1, end);
}
static int partition(int[] a, int begin, int end) {
    //pivot:标杆位置 counter:小于pivot的元素的个数
    int pivot = end, counter = begin;
    for (int i = begin; i < end; i++) {
        if (a[i] < a[pivot]) {
            int temp = a[counter]; a[counter] = a[i]; a[i] = temp;
            counter ++;
        }
    }
    int temp = a[pivot]; a[pivot] = a[counter]; a[counter] = temp;
    return counter;
} -->

2、归并排序-分治
把长度为 n 的输入序列分成两个长度为 n/2 的子序列
对这两个子序列分别采用归并排序
将两个排序好的子序列合并成一个最终的排序序列。
java 版本

<!-- public static void mergeSort(int[] array, int left, int right) {
    if (right <= left) return;
    int mid = (lelft + right) >> 1;//(left + right) /2
    mergeSort(array, left, mid);
    mergeSort(array, mid+1, right);
    merge(array, left, mid, right);
}
public static void merge(int[] arr, int left, int mid, int right) {
    int[] temp = new int[right - left + 1];//中间数组
    int i = left, j = mid + 1,k = 0;
    while (i <= mid && j <= right) {
        temp[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++];
    }
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];

    for (int p = 0; p< temp.length; p++) {
        arr[left + p] = temp[p];
    }
    //也可以用System.arraycopy(a, start1, b, start2, length)
} -->

归并和快排具有相似性，但步骤相反
归并：先排序左右子数组，然后合并两个有序子数组
快排：先调配出左右子数组，然后对于左右子数组进行排序。
3、堆排序-堆插入 o(logN),取最大/小值 o(1)
数组元素依次建立小顶堆
依次取堆顶元素，并删除
c++版本

<!-- void heap_sort(int a[], int len) {
    priority_queue<int, vector<int>, greater<int> > q;
    for (int i=0; i < len; i++) {
        q.push(a[i]);
    }
    for (int i = 0; i < len; i++) {
        a[i] = q.pop();
    }
} -->

java 版本

<!-- static void heapify (int[] array, int length, int i) {
    int left = 2*i+1, right = 2*i+2;
    int largest = i;
    if (left < length && array[left] > array[largest]) {
        largest = leftChild;
    }
    if (right < length && array[right] > array[largest]) {
        largest = right;
    }
    if (largest != i) {
        int temp = array[i]; array[i] = array[largest]; array[largest] = temp;
        heapify(array, length, largest);
    }
}
public static void heapSort(int[] array) {
    if (array.length ==0) return ;
    int length = array.length;
    for (int i = length /2-1; i >= 0; i--}
        heapify(array, length, i);
    for (int i = length-1; i >= 0; i--) {
        int temp = array[0]; array[0] = array[i]; array[i] =temp;
        heapify(array, i, 0);
    } -->
