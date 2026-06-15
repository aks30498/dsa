/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
    
    let closest = Number.POSITIVE_INFINITY;

    for (let i = 0; i < nums.length - 2; i++) {
        let start = i + 1;
        let end = nums.length - 1;

        while (start < end) {
            const sum = nums[i] + nums[start] + nums[end];

            // If we found an exact match, return immediately
            if (sum === target) return sum;

            // Update closest if the current sum is nearer to the target
            if (Math.abs(target - sum) < Math.abs(target - closest)) {
                closest = sum;
            }

            // Move pointers based on the sum
            if (sum < target) {
                start++;
            } else {
                end--;
            }
        }
    }

    return closest;
};