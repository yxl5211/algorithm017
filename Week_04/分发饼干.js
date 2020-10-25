const findContentChildren = (g, s) => {
    //将孩子g饼干s都按从小到大排序，保证不出遗漏
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    //获取孩子和饼干的数量
    const gLen = g.length;
    const sLen = s.length;
    //分别使用两个指针遍历孩子和饼干
    let gIndex = 0;
    let sIndex = 0;
    //存储吃到饼干的孩子数量
    let count = 0;
    //当孩子和指针任意一个被遍历完时，可知结果，退出循环
    while (gIndex < gLen && sIndex < sLen) {
        if (s[sIndex] >= g[gIndex]) {
            //若饼干可被分食，则两个指针一起移动，匹配下一个元素
            sIndex++;
            gIndex++;
            //统计吃到饼干孩子个数
            count++;
        } else {
            //若饼干不可被食用，则继续匹配下一个饼干，孩子处于等待状态
            sIndex++;
        }
    }
    return count;
}