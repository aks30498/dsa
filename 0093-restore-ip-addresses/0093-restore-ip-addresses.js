var restoreIpAddresses = function(str) {
    const ans = [];

    // segmentIndex tracks which of the 4 parts we are building (0 to 3)
    // startIndex tracks our position in the original string
    function backtrack(startIndex, segmentIndex, currentIP) {
        // Base Case 1: If we found 4 segments and used the whole string, it's valid!
        if (segmentIndex === 4) {
            if (startIndex === str.length) {
                ans.push(currentIP.join('.'));
            }
            return;
        }

        // Base Case 2: If we run out of string before getting 4 segments
        if (startIndex === str.length) return;

        // Rule: A single segment can only be 1, 2, or 3 digits long
        for (let len = 1; len <= 3; len++) {
            // Out of bounds check
            if (startIndex + len > str.length) break;

            const segmentStr = str.slice(startIndex, startIndex + len);
            const segmentVal = parseInt(segmentStr, 10);

            // Validation Checks:
            // 1. Must be less than or equal to 255
            // 2. No leading zeros (e.g., "05" is invalid, but "0" alone is fine)
            if (segmentVal > 255) break;
            if (segmentStr.length > 1 && segmentStr[0] === '0') break;

            // Decision: Choose this chunk and move to the next segment
            currentIP.push(segmentStr);
            backtrack(startIndex + len, segmentIndex + 1, currentIP);
            
            // Backtrack: Undo the choice for the next loop iteration
            currentIP.pop();
        }
    }

    backtrack(0, 0, []);
    return ans;
};