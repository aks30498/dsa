var combinationSum2 = function (candidates, target) {
    const res = [];
    candidates.sort((a, b) => a - b); // Still need to sort!

    function backtrack(startIndex, currentCombo, remainingTarget) {
        if (remainingTarget === 0) {
            res.push([...currentCombo]);
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            // EFFICIENCY WIN 1: Big optimization (Pruning)
            // If the current number is bigger than what we need, 
            // because the array is sorted, all numbers after it will also be too big.
            if (candidates[i] > remainingTarget) break;

            // EFFICIENCY WIN 2: Skip duplicates at the same tree depth
            // If this isn't the first element we are trying at this position,
            // and it's identical to the previous one, skip it.
            if (i > startIndex && candidates[i] === candidates[i - 1]) {
                continue;
            }

            // Move forward
            currentCombo.push(candidates[i]);
            backtrack(i + 1, currentCombo, remainingTarget - candidates[i]);
            currentCombo.pop(); // Backtrack
        }
    }

    backtrack(0, [], target);
    return res;
};