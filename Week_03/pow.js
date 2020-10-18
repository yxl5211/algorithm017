var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / myPow(x, -n);
    if (n % 2) {
        //add
        return x * myPow(x, n - 1); //n为奇数，为x*x的n-1次方。
    } else {
        //even
        return myPow(x * x, n / 2); //n为偶数，使用分治，一分为二，等于x*x的n/2次方。
    }

}