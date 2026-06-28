var multiply = function(num1, num2) {
    // Edge case: if either number is "0", the result is "0"
    if (num1 === "0" || num2 === "0") return "0";
    
    // The maximum possible length of the result is the sum of both lengths
    const res = new Array(num1.length + num2.length).fill(0);
    
    // Loop backwards through both strings
    for (let i = num2.length - 1; i >= 0; i--) {
        for (let j = num1.length - 1; j >= 0; j--) {
            // Multiply the two digits
            const mul = Number(num2[i]) * Number(num1[j]);
            
            // This is the position in the array where the result belongs
            const p1 = i + j;     // Carry position
            const p2 = i + j + 1; // Current position
            
            // Add current multiplication to whatever is already at p2
            const sum = mul + res[p2];
            
            // Update the positions using your fast math trick!
            res[p2] = sum % 10;
            res[p1] += (sum / 10) | 0; // Accumulate the carry into the next position
        }
    }
    
    // Remove any leading zero if the array didn't completely fill up
    if (res[0] === 0) {
        res.shift();
    }
    
    return res.join('');
};