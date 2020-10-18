const combine = (n, k) => {
    const ans = [];
    const helper = (start, path) => {
        if (path.length === k) {
            ans.push(path.slice());
            return;
        }
        for (let i = start; i <= n; i++) {
            path.push(i)
            helper(i + 1, path)
            path.pop();
        }
    }
    helper(1, []);
    return ans;
}