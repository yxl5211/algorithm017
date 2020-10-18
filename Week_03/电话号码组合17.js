var letterCombinations = function(digits) {
    if (digits.length === 0) return []; //特殊情况。返回空数组。
    const ans = [];
    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    const dfs = (curStr, i) => { //curStr当前字符串，i：level,遍历层数。
        if (i === digits.length) { //遍历的层数与原始字符串对应的长度相等时，遍历结束，终止。
            ans.push(curStr.slice()); //当前的遍历的字符串拷贝，然后放在ans里面。
            return;
        }
        const letters = map[digits[i]]; //当前数字对应哪些字母
        for (const x of letters) { //不同的字母选择不同的递归分支。
            dfs(curStr + x, i + 1); //递归下一层
            //reverse
        }
    }
    dfs('', 0); //初始递归入口，初始字符串'',初始层为0.
    return ans;
}