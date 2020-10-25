var ladderLength = function(beginWord, endWord, wordList) {
    const words = new Set(wordList);
    if (!words.has(endWord)) return 0;
    let begins = new Set([beginWord]), //正向扩展源，类似层序遍历初始化只有根节点
        ends = new Set([endWord]); //反向扩展源。
    let res = 1;
    while (begins.size > 0) {
        const nextBegins = new Set();
        //三层循环分别迭代扩展源每个单词，每个字符，每个可能的变化。最终得到可能扩展出的单词。
        for (const w of begins) {
            for (let i = 0; i < w.length; i++) {
                for (let j = 0; j < 26; j++) {
                    const c = String.fromCharCode(97 + j)
                    if (w[i] !== c) {
                        const newWord = w.slice(0, i) + c + w.slice(i + 1);
                        if (ends.has(newWord)) return res + 1;
                        if (words.has(newWord)) {
                            nextBegins.add(newWord);
                            words.delete(newWord);
                        }
                    }
                }
            }
        }
        begins = nextBegins;
        res++;
        if (begins.size > ends.size)[begins, ends] = [ends, begins];
    }
    return 0;
}