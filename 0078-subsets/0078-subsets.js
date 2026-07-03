/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];

    const curr = [];
    function backtrack(index){
        if(index >= nums.length){
            res.push([...curr]);
            return;
        }

        curr.push(nums[index]);
        backtrack(index + 1);
        curr.pop();
        backtrack(index + 1);
    }
    backtrack(0);
    return res;
};