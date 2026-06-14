var searchRange = function(nums, target) {
    return [findFirst(nums, target), findLast(nums, target)];
};

// Helper function to find the first occurrence
function findFirst(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let index = -1;

    while (start <= end) {
        let mid = (start + (end - start) / 2) | 0;

        if (nums[mid] >= target) {
            if (nums[mid] === target) index = mid; // Record candidate
            end = mid - 1; // Keep looking left for an even earlier one!
        } else {
            start = mid + 1;
        }
    }
    return index;
}

// Helper function to find the last occurrence
function findLast(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let index = -1;

    while (start <= end) {
        let mid = (start + (end - start) / 2) | 0;

        if (nums[mid] <= target) {
            if (nums[mid] === target) index = mid; // Record candidate
            start = mid + 1; // Keep looking right for an even later one!
        } else {
            end = mid - 1;
        }
    }
    return index;
}