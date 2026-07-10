/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const ubstMemo = [1,1];

    const ubst = (num) => {
        if(ubstMemo[num]) return ubstMemo[num];

        let sum = 0;
        for(let i=1; i<=num; i++){
           sum = sum + ubst(i-1) * ubst(num-i);
        }
        ubstMemo[num] = sum;
        return sum;
    }

    return ubst(n);
};