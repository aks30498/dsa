/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    const n = nums.sort((a, b) => a - b);

    let closest = Number.POSITIVE_INFINITY;
    const func = (fixed, start, end) => {
        if (end === start) return;

        const sum = fixed + n[start] + n[end];

        if (Math.abs(target - sum) < Math.abs(target - closest)) {
            closest = sum;
        }

        if (sum === target) { return; }
        else if (sum < target) {
            func(fixed, start + 1, end);
        } else {
            func(fixed, start, end - 1)
        }
    }

    for (let i = 0; i <= n.length - 3 && closest !== target; i++) {
        func(n[i], i + 1, n.length - 1);
    }


    return closest
};