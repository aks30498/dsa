/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    const cas = (n) => n === 1 ? "1" : rle(cas(n - 1));

    const rle = (str) => {
        let res = "";
        let counter = 1;

        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i + 1]) {
                counter++;
            } else {
                res = res + counter + str[i];
                counter = 1
            }
        }

        return res;
    }

    return cas(n)
};