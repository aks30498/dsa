var groupAnagrams = function(strs) {
    const signature = new Map();

    for (const word of strs) {
        const sign = new Array(26).fill(0);

        for (const char of word) {
            sign[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        const key = sign.join('#');

        if (signature.has(key)) {
            signature.get(key).push(word);
        } else {
            signature.set(key, [word]);
        }
    }

    return [...signature.values()];
};