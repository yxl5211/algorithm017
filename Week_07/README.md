# 学习笔记

## 1、Trie 树的基本实现和特性

    字典树，又叫Trie树，又称单词查找树或键树，是一种树形结构。典型应用是用于统计和排序大量的字符串（不仅限于字符串），所以经常被搜索用于文本词频统计。
    优点：最大限度减少无谓的字符串比较，查询效率比哈希表高。
    基本性质：
    1、节点本身不存在完整单词
    2、从根节点到某一节点，路径上经过的字符链接起来，，为该节点对应的字符串
    3、每个节点是所有子节点路径代表的字符都不相同。

## 核心思想

    Trie树的核心思想是空间换时间
    利用字符串的公共前缀来降低查询时间的开销以达到提高效率的目的。

python 版本

<!-- class Trie(object):
    def __init__(self):
        self.root = {}
        self.end_of_word = "#"
    def insert(self, word):
        node = self.root
        for char in word:
            node = node.setdefault(char, {})
        node[self.end_of_word] = self.end_of_word
    def search(self, word):
        node = self.root
        for char in word:
            if char not in node:
                return false
            node = node[char]
        return self.end_of_word in node
    def startsWith(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node:
                return false
            node = node[char]
        return True -->

javascript 版本

<!-- class Trie {
    constructor() {
        this.root = {};
        this.endOfWord = "$";
    }
    insert(word) {
        let node = this.root;
        for (let ch of word) {
            node[ch] = node[ch] || {};
            node = node[ch];
        }
        node[this.endOfWord] = this.endOfWorld;
    }
    search(word) {
        let node = this.root;
        for (let ch of word) {
            if (!node[ch]) return false;
            node = node[ch];
        }
        return node[this.endOfWord] === this.endOfWord;
    }
    startsWith(word) {
        let node = this.root;
        for (let ch of word) {
            if (!node[ch]) return false;
            node = node[ch];
        }
        return true;
    }
} -->

## 并查集的基本实现和特性

    适用场景：组团、配对问题
    基本操作
    1、makeSet(s):建立一个新的并查集，其中包含s个单元元素集合
    2、unionSet(x, y):把元素x,元素y所在的集合合并，要求x和y所在的集合不相交，如果相交则不合并
    3、find(x):找到元素x所在的集合的代表，该操作也可以用于判断两个元素是否位于同一个集合，只要将它们各自的代表比较一下就可以了。

java 版本

<!-- class UnionFind {
    private int count = 0;
    private int[] parent;
    public UnionFind(int n) {
        count = n;
        parent = new int[n];
        for (int i = 0; i< n;i++) {
            parent[i]=i;
        }
    }
    public int find(int p) {
        while(p != parent[p]) {
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    }
    public void union(int p, int q) {
        int rootP = find(p);
        int rootQ = find(q);
        if (rootP == rootQ) return;
        parent[rootP] = rootQ;
        count --;//里面的独立集合就减少一个
    }
} -->

python 版本

<!-- def init(p):
    #for i = 0..n: p[i]=i;
    p = [i for i in range(n)]
def union(self, p, i, j):
    p1 = self.parent(p,i)
    p2 = self.parent(p,j)
    p[p1] = p2
def parent(self, p, i):
    root = i
    while p[root] !=root:
        root = p[root]
    while p[i] != i: #路径压缩
        x= i; i = p[i];p[x] = root
    return root -->

javascript 版本

    <!-- class unionFind {
        construtor(n) {
            this.count = n;
            this.parent = new Array(n);
            for (let i = 0; i < n; i++) {
                this.parent[i] = i;
            }
        }
        find(p) {
            let root = p;
            while (parent[root] !== root) {
                root = parent[root];
            }
            //压缩路径
            while (parent[p] !== p) {
                let x = p;
                p = this.parent[p];
                this.parent[x] = root;
            }
            return root;
        }
        union(p, q) {
            let rootP = find(p);
            let rootQ = find(q);
            if (rootP === rootQ) return ;
            this.parent[rootP] = rootQ;
            this.count --;
        }
    } -->

后面的题量越来越大，感觉做起来有一定压力，还得做好总结，加上最近有点小忙，所以，刷题的进度也没有怎么赶上。比较落后一点，后面得重复刷下做过的，感觉前面的题，做过又给忘记了。心累。
