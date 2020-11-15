/**
 * Trie，又叫前缀树或字典树，是一种有序树
 * 基本性质
 * 根节点不包括字符，除根节点以外每个节点只包含一个字符
 * 从根节点到某一个节点，路径上经过的字符连接起来，为该节点对应的字符串
 * 每个节点的所有子节点包含的字符不相同
 */
//字典树节点
class TreeNode {
    constructor() {
        //是不是最后一个节点
        this.END = false;
        //所有的儿子节点
        this.links = new Array(26);
    }
    containsKey(letter) {
        return this.links[letter.charCodeAt() - 97] != undefined
    }
    getCh(letter) {
        return this.links[letter.charCodeAt() - 97]
    }
    putCh(letter, newTrieNode) {
        this.links[letter.charCodeAt() - 97] = newTrieNode
    }
    setEnd() {
        this.END = true
    }
    isEnd() {
        return this.END
    }
}
//初始化字典树
var Trie = function() {
        root = new TreeNode()
    }
    //搜索单词字符链接是否存在于字典树组成的链接中
let searchPrefix = (word) => {
        //从根节点开始
        let currNode = root
        for (let i = 0; i < word.length; i++) {
            //当前单词当前字符存在字典树正常向下遍历的链接中
            if (currNode.containsKey(word[i])) {
                //存在则继续向下
                currNode = currNode.getCh(word[i])
            } else {
                return null
            }
        }
        //单词遍历完，均在字典树中，说明单词字符链接至少时字典树中的前缀
        //或者是一条完整的链接即单词存在
        return currNode
    }
    //建立字典树
    //在字典树中插入一个单词
Trie.prototype.insert = function(word) {
        let currNode = root;
        for (let i = 0; i < word.length; i++) {
            //当前节点没有儿子节点，则创建当前节点作为新的父节点
            //并创建一个新的TreeNode子节点与其相连
            if (!currNode.containsKey(word[i])) {
                currNode.putCh(word[i], new TreeNode());
            }
            //当前节点存在，即当前单词中的当前字符存在于字典树中
            //则继续搜索下一个链接，即子节点
            currNode = currNode.getCh(word[i])
        }
        //直到当前搜索完毕，当前节点标记为结束节点
        currNode.setEnd();
    }
    //在字典树中查找一个完全匹配的单词
Trie.prototype.search = function(word) {
    //将查找单词字符链接函数定义成一个函数，后面搜索前缀的可以复用
    let currNode = searchPrefix(word)
        //如果单词至少是前缀，且字典树中也到了当前一条叉的尾部
        //则说明是完整的单词存在字典树中
        //否则最多是前缀即下面的startsWith搜索
    return currNode != null && currNode.isEnd()
}
Trie.prototype.startsWith = function(prefix) {
    let currNode = searchPrefix(prefix)
    return currNode != null
}