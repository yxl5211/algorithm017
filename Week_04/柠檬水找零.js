const lemonadeChange = (bills) => {
    //贪心
    let fiveCount = 0;
    let tenCount = 0;
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            fiveCount++;
        } else if (bills[i] === 10) {
            if (fiveCount <= 0) return false;
            fiveCount--;
            tenCount++;
        } else {
            //优先10+5
            //其他 5+5+5
            if (tenCount > 0 && fiveCount >= 1) {
                tenCount--;
                fiveCount--;
            } else if (tenCount <= 0 && fiveCount >= 3) {
                fiveCount -= 3
            } else {
                return false;
            }
        }
    }
    return true;
}