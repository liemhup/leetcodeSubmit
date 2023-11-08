var hammingWeight = function(n) {
    let count = 0
    whlie (n!=0) {
        if (n%2==1) {
        count++;
        n=(n-1)/2;
        }
         n=n/2;
    }
    return count
};