/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const res = [];
    candidates.sort((a, b) => a - b);
    function cs2(startIndex, arr, rt) {
        if (rt === 0) {
            res.push([...arr])
            return;
        }

        if (rt < 0 || startIndex > candidates.length - 1) return;

        arr.push(candidates[startIndex]);
        cs2(startIndex + 1, arr, rt - candidates[startIndex]);
        arr.pop();
        const currVal = candidates[startIndex];
        while (candidates[startIndex] === currVal) {
            startIndex++;
        }
        cs2(startIndex, arr, rt);
    }
    cs2(0, [], target)
    return res;
};