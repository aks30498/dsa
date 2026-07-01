/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const res = Array.from({ length: n }, () => Array(n).fill(0));

    const dc = [1, 0, -1, 0];
    const dr = [0, 1, 0, -1];

    let di = 0;

    let r = 0;
    let c = 0;

    for (let i = 1; i <= n * n; i++) {
        res[r][c] = i;

        if (c + dc[di] >= n || c + dc[di] < 0 || r + dr[di] >= n || r + dr[di] < 0 || res[r + dr[di]][c + dc[di]] !== 0) {
            di = (di + 1) % 4;
        }

        r = r + dr[di];
        c = c + dc[di];


    }

    return res;
};