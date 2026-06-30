/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const res = [];
    const p = [];

    nums.sort((a, b) => a - b);

    const used = new Array(nums.length).fill(false)

    const backtrack = () => {
        if(p.length === nums.length) {
            res.push([...p]);
            return;
        }

        for(let i=0; i<nums.length; i++){
            if(used[i]) continue;

            if(i>0 && nums[i] === nums[i-1] && !used[i-1]){
                continue;
            }

            p.push(nums[i]);
            used[i] = true;

            backtrack();

            p.pop();
            used[i] = false;
        }
    }

    backtrack();
    return res;
};