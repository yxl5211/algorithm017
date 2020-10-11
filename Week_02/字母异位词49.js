/**
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 所有输入均为小写字母。
    不考虑答案输出的顺序。
 */
var groupAnagrams = function(strs) {
    let map = {};
    for (let str of strs) {
        let key = str.split('').sort().join('');
        map[key] ? map[key].push(str) : map[key] = [str];
    }
    return Object.values(map);
}