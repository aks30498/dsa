var subsetsWithDup = function (nums) {
    // 1. CRITICAL: Sort the array first
    nums.sort((a, b) => a - b);
    
    const res = [[]];
    let startIndex = 0; // Tracks where to start iterating in res

    for (let i = 0; i < nums.length; i++) {
        // If it's a duplicate, only loop through subsets added in the PREVIOUS step
        if (i > 0 && nums[i] === nums[i - 1]) {
            // startIndex remains what it was set to at the end of the last loop
        } else {
            // If it's a new number, start from the very beginning of res
            startIndex = 0;
        }

        const currentLength = res.length; // Snapshot the current size
        
        // Record where the newly added elements for this step will start
        const nextStartIndex = currentLength; 

        for (let j = startIndex; j < currentLength; j++) {
            res.push([...res[j], nums[i]]);
        }

        // Update startIndex for the next iteration
        startIndex = nextStartIndex;
    }

    return res;
};