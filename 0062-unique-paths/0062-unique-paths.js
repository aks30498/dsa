var uniquePaths = function(m, n) {
    // Create a 2D array (memo) filled with -1
    const memo = Array.from({ length: n }, () => Array(m).fill(-1));

    function ways(x, y) {
        if (x === 0 && y === 0) return 1;
        if (x < 0 || y < 0) return 0;

        // IF WE ALREADY CALCULATED THIS CELL, JUST RETURN IT!
        if (memo[x][y] !== -1) return memo[x][y];

        if (x === 0) {
            memo[x][y] = ways(0, y - 1);
        } else if (y === 0) {
            memo[x][y] = ways(x - 1, 0);
        } else {
            memo[x][y] = ways(x - 1, y) + ways(x, y - 1);
        }

        return memo[x][y];
    }

    return ways(n - 1, m - 1);
};