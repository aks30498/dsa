/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const map = [0, 0, 0]

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]]++;
    }
    let i = 0;
    while (map[0]) {
        nums[i] = 0;
        map[0]--
        i++;
    }

    while (map[1]) {
        nums[i] = 1;
        map[1]--;
        i++;
    }

    while (map[2]) {
        nums[i] = 2;
        map[2]--;
        i++;
    }
}
