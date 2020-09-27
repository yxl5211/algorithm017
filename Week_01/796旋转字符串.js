const rotateString = (A, B) => {
    for (let i = 0; i < A.length; i++) {
        if (A.slice(i) + A.slice(0, i) === B) {
            return true;
        }
    }
    return B.length ? false : true;
}