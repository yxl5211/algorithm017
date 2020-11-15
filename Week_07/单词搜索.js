/**基于Trie树+DFS */
// 构建树Trie-遍历board-DFS
var findWords = function(board, words) {
    let res = [],
        row = board.length,
        col = board[0].length
    const getTrie = words => {
        let root = Object.create(null)
        for (let word of words) {
            let node = root
            for (let c of word) {
                if (!node[c]) node[c] = Object.create(null)
                node = node[c]
            }
            node.word = word
        }
        return root
    }
    const dfs = (trie, x, y) => {
            if (trie.word) {
                res.push(trie.word)
                trie.word = null //make sure only print one time for each word
            }
            //handle board boundary
            if (x < 0 || y < 0 || y >= row || x >= col) return
            if (!trie[board[y][x]]) return
                // let dx = [-1, 1, 0, 0]
                // let dy = [0, 0, -1, 1]
            let prefixChar = board[y][x]
            board[y][x] = "#" //mask visited
                // for (let k = 0; k < 4; k++) {
                //     i = x + dx[k]
                //     j = y + dy[k]
                // }
            dfs(trie[prefixChar], x, y - 1)
            dfs(trie[prefixChar], x, y + 1)
            dfs(trie[prefixChar], x - 1, y)
            dfs(trie[prefixChar], x + 1, y)
            board[y][x] = prefixChar //restore
        }
        //traverse board
    let trie = getTrie(words)
    for (let y = 0; y < row; y++) {
        for (let x = 0; x < col; x++) {
            dfs(trie, x, y)
        }
    }
    return res;
}