var restoreIpAddresses = function (str) {
    const ans = [];

    function backtrack(index, arrIndex, arr) {
        if (arrIndex === 4) {
            if (index === str.length) {
                ans.push(arr.join('.'))
            }
            return;
        }



        for (let len = 1; len < 4; len++) {
            const num = str.slice(index, index + len);
            if (parseInt(num) > 255) {
                break;
            }

            arr.push(num);
            backtrack(index + len, arrIndex + 1, arr);
            arr.pop();
            if (str[index] === '0') break;
        }

    }

    backtrack(0, 0, [])
    return ans;
};