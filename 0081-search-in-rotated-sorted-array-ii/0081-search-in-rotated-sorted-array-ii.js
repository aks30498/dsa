/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if(target === nums[mid]) return true;

        if (nums[start] === nums[mid] && nums[end] === nums[mid]) {
            start++;
            end--;
            continue;
        }

        

        if (nums[mid] >= nums[start]) {
            if (target >= nums[start] && target < nums[mid]) {
                end = mid - 1;
            }else {
                start = mid + 1;
            }
        } else {
            if(target <= nums[end] && target > nums[mid]){
                start = mid + 1;
            }else {
                end = mid - 1;
            }
        }
    }

    return false;
};