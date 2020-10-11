var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let hash = Array(26).fill(0);
    let codeA = "a".charCodeAt(0); //97
    let len = s.length;
    for (let i = 0; i < len; i++) {
        hash[s.charCodeAt(i) - codeA]++;
        hash[t.charCodeAt(i) - codeA]--;
    }
    return hash.every(el => el === 0);
}