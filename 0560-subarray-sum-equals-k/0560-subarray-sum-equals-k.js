/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const sumMap = { 0: 1 };
    let cs = 0;
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        cs = cs + nums[i];
        ans = ans + (sumMap[cs - k] || 0)
        if (sumMap[cs]) { sumMap[cs]++; } else { sumMap[cs] = 1 }

    }
    return ans
};