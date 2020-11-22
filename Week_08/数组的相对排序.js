var relativeSortArray = function(arr1, arr2) {
        let counts = new Array(1001).fill(0);
        for (let n of arr1) {
            counts[n]++; //统计arr1出现次数
        }
        let res = [];
        for (let n of arr2) { //遍历arr2
            while (counts[n] > 0) { //出现次数大于0，循环推入res,循环结束，值为0
                res.push(n);
                counts[n]--;
            }
        }
        for (let i = 0; i < counts.length; i++) { //遍历counts
            while (counts[i] > 0) { //非0项的索引，循环推入res
                res.push(i);
                counts[i]--;
            }
        }
        return res;
    }
    /**
     * 先遍历arr1通过哈希记录arr2的元素及个数
     * 申明两个数组arr:存放arr1中独有的元素，res:存放结果
     * 遍历arr2,每个元素位置用map中存放的集合代替存在结果数组中，并且清除已经处理的哈希
     * 对map中未处理的集合（arr1独有的元素）。存放在arr中，并且对它排序
     * 合并arr和res
     */
var relativeSortArray = function(arr1, arr2) {
    let map = new Map(),
        res = [],
        arr = [];
    //使用哈希记录arr1中每个元素的集合
    for (let i = 0; i < arr1.length; i++) {
        if (map.has(arr1[i])) {
            map.get(arr1[i]).push(arr1[i])
        } else {
            map.set(arr1[i], [arr1[i]])
        }
    }
    //按照arr2顺序存放在哈希arr对应的集合中
    for (let i = 0; i < arr2.length; i++) {
        if (map.has(arr2[i])) {
            res = res.concat(map.get(arr2[i]))
            map.delete(arr2[i])
        }
    }
    //存放arr1中独有的元素
    for (let [key, value] of map.entries()) {
        arr = arr.concat(value)
    }
    arr.sort((a, b) => a - b)
    return res.concat(arr)
}