/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];

    function cs(startIndex, arr, rt) {
        if(rt === 0) {
            res.push([...arr]);
            return;
        }

        if(rt < 0) return;
        arr.push(candidates[startIndex])
        cs(startIndex, arr, rt - candidates[startIndex]);
        arr.pop();
        if(startIndex < candidates.length - 1)
        cs(startIndex + 1, arr, rt);
    }

    cs(0, [], target);

    return res;
};