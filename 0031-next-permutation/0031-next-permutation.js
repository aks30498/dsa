/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;

    // Step 1: Find the first decreasing element from the right
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // If a pivot was found
    if (i >= 0) {
        let j = nums.length - 1;
        // Step 2: Find the element just larger than nums[i] from the right
        while (nums[j] <= nums[i]) {
            j--;
        }
        // Swap them
        swap(nums, i, j);
    }

    // Step 3: Reverse the elements to the right of the pivot
    reverse(nums, i + 1, nums.length - 1);
};

// Helper function to swap elements in place
function swap(nums, left, right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
}

// Helper function to reverse a subarray in place
function reverse(nums, start, end) {
    while (start < end) {
        swap(nums, start, end);
        start++;
        end--;
    }
}