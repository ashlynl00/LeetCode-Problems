/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = [];
    for (let i=0; i<=n; i++) {
        ans.push(binaryRep(i));
    }
    return ans;
};

const binaryRep = (i) => {
    let count = 0;
    while (i > 0) {
        if (i % 2 !== 0) {
            count += 1;
        } 
        i = Math.floor(i/2);
    }
    return count;
}


