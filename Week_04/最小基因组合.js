var minMutation = function(start, end, bank) {
    if (start === end) return 0;
    var bankSet = new Map();
    for (var i = 0; i < bank.length; i++) {
        bankSet.set(bank[i], true);
    }
    var genes = { 'A': ["C", "G", "T"], 'C': ["A", "G", "T"], 'G': ["A", "C", "T"], 'T': ["A", "C", "G"] };
    var level = 0;
    var queue = [start];
    while (queue.length) {
        var size = queue.length;
        while (size > 0) {
            var curr = queue.pop();
            if (curr === end) return level;
            var arrCurr = curr.split('');
            for (var i = 0; i < arrCurr.length; i++) {
                var oldCurr = arrCurr[i];
                var tmpGenes = genes[oldCurr];
                var len = tmpGenes.length;
                for (var r = 0; r < len; r++) {
                    arrCurr[i] = tmpGenes[r];
                    var strCurr = arrCurr.join('');
                    if (bankSet.has(strCurr)) {
                        bankSet.delete(strCurr);
                        queue.unshift(strCurr);
                    }
                }
                arrCurr[i] = oldCurr;
            }
            size--;
        }
        level++;
    }
    return -1;
}