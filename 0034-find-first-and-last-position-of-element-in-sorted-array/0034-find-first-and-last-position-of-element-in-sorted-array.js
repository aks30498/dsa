/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = -1;
    let last = -1;

    let start = 0;
    let end = nums.length - 1;
    let mid = undefined;

    while(start <= end) {
        mid = (start + (end - start) / 2) | 0;
        console.log(mid, nums[mid])
        if(target === nums[mid]) {
            first = mid;
            last = mid;

            while(nums[first - 1] === target){
                first--;
            }

            while(nums[last +1] === target){
                last++;
            }

            return [first,last]
        }

        if(nums[mid] < target) {
            start = mid+1
        }else {
            end = mid -1
        }
    }

    return [first, last]
};