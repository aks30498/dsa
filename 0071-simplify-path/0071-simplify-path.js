var simplifyPath = function (path) {
    const stack = [];
    let curr = "";

    // Add a trailing slash to force the loop to process the final segment
    const modifiedPath = path + "/";

    for (let i = 0; i < modifiedPath.length; i++) {
        const char = modifiedPath[i];

        if (char === '/') {
            // We hit a delimiter! Process whatever directory name we built up
            if (curr === '..') {
                stack.pop();
            } else if (curr !== '.' && curr !== '') {
                stack.push(curr);
            }
            
            // Reset the buffer for the next directory
            curr = ""; 
        } else {
            // Build the current directory name character by character
            curr += char;
        }
    }

    return '/' + stack.join('/');
};