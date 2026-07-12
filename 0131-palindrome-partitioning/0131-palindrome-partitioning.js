/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const results = [];

    const isPalindrome = (left, right) => {
        while(s[left] === s[right] && left < right){
            left++;
            right--;
        }

        return (left >= right);
    }

    function backtrack(startIndex, current) {
        if(startIndex === s.length){
            results.push([...current])
            return;
        }

        for(let endIndex = startIndex; endIndex < s.length; endIndex++){
            const substring = s.slice(startIndex, endIndex + 1)
            if(isPalindrome(startIndex, endIndex)) {
                current.push(substring)
                backtrack(endIndex + 1, current)
                 current.pop();
            }
           
        }
    }

    backtrack(0,[]);

    return results;
};